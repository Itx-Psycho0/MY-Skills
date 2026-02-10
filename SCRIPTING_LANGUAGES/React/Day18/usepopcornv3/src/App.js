import { useEffect, useState } from "react";
import StarRating from "./stars";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "51e1060d";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  /*
  useEffect(function () {
    console.log("After initial render");
  }, []);

  useEffect(function () {
    console.log("After every render");
  });

  useEffect(
    function () {
      console.log("D");
    },
    [query]
  );

  console.log("During render");
*/

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");

          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found");

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function Loader() {
  return <p className="loader">Loading...</p>;
}

function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>⛔️</span> {message}
    </p>
  );
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>

      {isOpen && children}
    </div>
  );
}

/*
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}
*/

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      function callback(e) {
        if (e.code === "Escape") {
          onCloseMovie();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;

      return function () {
        document.title = "usePopcorn";
        // console.log(`Clean up effect for movie ${title}`);
      };
    },
    [title]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated with movie {watchedUserRating} <span>⭐️</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}




// Component(instance) Lifecycle :- Mounting, Updating, Unmounting

// What is Side Effect ?
// 1. Data fetching
// 2. Subscriptions
// 3. Manually changing the DOM in React components
// 4. Timers (setTimeout, setInterval)
// 5. Logging
// A side effect is any application state change that is observable outside the component, or affects something outside the component, such as:
// 1. Fetching data from an API and updating the component state with the response.
// 2. Subscribing to a data stream or event and updating the component state when new data arrives.
// 3. Manually manipulating the DOM, such as adding event listeners or changing element styles.
// 4. Setting up timers to perform actions after a delay or at regular intervals.
// 5. Logging information to the console for debugging purposes.

// useEffect Hook :- It is used to perform side effects in functional components. It takes a function as an argument and runs it after the component renders. It can also return a cleanup function that runs before the component unmounts or before the effect runs again.

// useEffect(() => {
//    This code runs after the component renders
//   console.log("Component rendered");

//    Cleanup function (optional)
//   return () => {
//     This code runs before the component unmounts or before the effect runs again
//     console.log("Component will unmount or effect will run again");
//   };
// }, [dependencies]); // The effect runs when any of the dependencies change. If the dependencies array is empty, the effect runs only once after the initial render.


// Event handlers vs useEffect :- Event handlers are functions that are called in response to user interactions, such as clicks or form submissions. They are typically defined within the component and can update the component state directly. On the other hand, useEffect is used for side effects that occur as a result of state changes or component lifecycle events. It allows you to perform actions that are not directly tied to user interactions, such as fetching data or setting up subscriptions.

/*
function WatchedBox() {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
        </>
      )}
    </div>
  );
}
*/

// function Stars({
//   maxRating = 5,
//   color = "#fcc419",
//   size = 48,
//   className = "",
//   messages = [],
//   defaultRating = 0,
//   onSetRating,
// }) {
//   const [rating, setRating] = useState(defaultRating);
//   const [tempRating, setTempRating] = useState(0);

//   function handleRating(rating) {
//     setRating(rating);
//     onSetRating(rating);
//   }

//   const textStyle = {
//     lineHeight: "1",
//     margin: "0",
//     color,
//     fontSize: `${size / 1.5}px`,
//   };

//   return (
//     <div style={containerStyle} className={className}>
//       <div style={starContainerStyle}>
//         {Array.from({ length: maxRating }, (_, i) => (
//           <Star
//             key={i}
//             full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
//             onRate={() => handleRating(i + 1)}
//             onHoverIn={() => setTempRating(i + 1)}
//             onHoverOut={() => setTempRating(0)}
//             color={color}
//             size={size}
//           />
//         ))}
//       </div>
//       <p style={textStyle}>
//         {messages.length === maxRating
//           ? messages[tempRating ? tempRating - 1 : rating - 1]
//           : tempRating || rating || ""}
//       </p>
//     </div>
//   );
// }

// function Star({ onRate, full, onHoverIn, onHoverOut, color, size }) {
//   const starStyle = {
//     width: `${size}px`,
//     height: `${size}px`,
//     display: "block",
//     cursor: "pointer",
//   };

//   return (
//     <span
//       role="button"
//       style={starStyle}
//       onClick={onRate}
//       onMouseEnter={onHoverIn}
//       onMouseLeave={onHoverOut}
//     >
//       {full ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill={color}
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke={color}
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//         </svg>
//       )}
//     </span>
//   );
// }

// const containerStyle = {
//   display: "flex",
//   alignItems: "center",
// };

// const starContainerStyle = {
//   display: "flex",
// };



// The Dependency Array in useEffect Hook :- The dependency array is the second argument passed to the useEffect hook. It is an array of values that the effect depends on. The effect will only re-run if any of the values in the dependency array change. If the dependency array is empty, the effect will only run once after the initial render. If the dependency array is not provided, the effect will run after every render. It is important to include all relevant dependencies in the array to avoid bugs and ensure that the effect runs correctly when those dependencies change.

// Stale Closure in useEffect Hook :- A stale closure occurs when a function defined inside a useEffect hook captures and uses state or props that are outdated due to the way closures work in JavaScript. This can lead to bugs where the function is using old values instead of the current ones. To avoid stale closures, you can either include the relevant state or props in the dependency array of the useEffect hook, or you can use a ref to store the current value and access it within the function.

// three different types of dependencies in useEffect Hook :- 1. State dependencies: These are the state variables that the effect depends on. When any of these state variables change, the effect will re-run. 2. Prop dependencies: These are the props that the effect depends on. When any of these props change, the effect will re-run. 3. Function dependencies: These are the functions that the effect depends on. When any of these functions change (e.g., due to being re-created on each render), the effect will re-run. It is important to include all relevant dependencies in the dependency array to ensure that the effect runs correctly when those dependencies change and to avoid bugs related to stale closures.
// multiple dependencies in useEffect Hook :- When you have multiple dependencies in a useEffect hook, you can include them all in the dependency array. The effect will re-run whenever any of the dependencies change. For example:

// useEffect(() => {
//   This code runs after the component renders and whenever any of the dependencies change
// }, [dependency1, dependency2, dependency3]);

// In this example, the effect will run after the initial render and then re-run whenever dependency1, dependency2, or dependency3 changes. It is important to include all relevant dependencies in the array to ensure that the effect runs correctly when those dependencies change and to avoid bugs related to stale closures.

// without dependency array in useEffect Hook :- If you use the useEffect hook without a dependency array, the effect will run after every render of the component. This means that the effect will execute not only after the initial render but also after every update to the component's state or props. This can lead to performance issues if the effect is doing something expensive, such as fetching data or manipulating the DOM, because it will run unnecessarily on every render. It is generally recommended to include a dependency array to control when the effect runs and to avoid performance issues. 

// empty dependency array in useEffect Hook :- If you use the useEffect hook with an empty dependency array, the effect will only run once after the initial render of the component. This means that the effect will execute only when the component is first mounted and will not run again on subsequent renders or updates to the component's state or props. This is useful for effects that you only want to run once, such as fetching data when the component mounts or setting up a subscription. However, if your effect depends on any state or props, you should include those dependencies in the array to ensure that the effect runs correctly when those dependencies change.

// When are effects executed in React ? :- Effects in React are executed after the component has rendered and the changes have been painted on the screen. This means that the effect function passed to useEffect will run after the DOM has been updated with the latest changes from the render. The timing of when effects are executed can be controlled using the dependency array, which allows you to specify when the effect should re-run based on changes to state or props. Additionally, if you return a cleanup function from the effect, it will be executed before the component unmounts or before the effect runs again on subsequent renders.
// mount - commit - browser paints - useEffect runs - update - commit - layout effect - browser paints - useEffect runs - unmount - useEffect cleanup runs