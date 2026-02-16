import React from "react";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}



class App extends React.Component {
  // constructor is used to initialize the state of the component and bind methods if necessary. It is called before the component is mounted.
  constructor(props) {
    super(props);
    this.state = {
      location: "india",
      displayLocation: "",
      isLoading: false,
    };
    this.fetchWeather = this.fetchWeather.bind(this);
  }

  async fetchWeather() {
    try {
      this.setState({ isLoading: true });
    // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      );
      const geoData = await geoRes.json();
      console.log(geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
      geoData.results.at(0);
    console.log(`${name} ${convertToFlag(country_code)}`);
    this.setState({ displayLocation: `${name} ${convertToFlag(country_code)}` });

    // 2) Getting actual weather
      const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
    );
    const weatherData = await weatherRes.json();
    this.setState({ weather: weatherData.daily });
     } catch (err) {
    console.error(err);
   } finally {
    this.setState({ isLoading: false });
   }
  }
  render() {
    return (
      <div className="app">
        <h1>Weather App</h1>
        <div>
          <input type="text" placeholder="search for loc...."
          value={this.state.location}
          onChange={(e)=>this.setState({location:e.target.value})}></input>
        </div>
        <button onClick={this.fetchWeather}>Get Weather</button>
        {this.state.isLoading && <p className="loader">Loading...</p>}
        {this.state.weather && <Weather weather={this.state.weather} location={this.state.displayLocation}/>}
      </div>
    );
  }
}

export default App;

class Weather extends React.Component {
  render() {
    const { temperature_2m_max : max, temperature_2m_min : min, weathercode: codes , time : dates} = this.props.weather;
    return (
      <div>
        <h2>Weather in {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, idx) => (
            <Day date={date} max={max[idx]} min={min[idx]} code={codes[idx]} key={date}
            isToday={idx === 0}/>
          ))}
        </ul>
      </div>
    );
  }
}

class Day extends React.Component {
  render() {
    const { date, code, max, min, isToday } = this.props;
    return (
      <li className="day">
        <p className="date">{isToday ? "Today" : formatDay(date)}</p>
        <span>{getWeatherIcon(code)}</span>
        <p>{Math.floor(min)}° &mdash; <strong>{Math.ceil(max)}°</strong></p> 
      </li>
    )
  }
}