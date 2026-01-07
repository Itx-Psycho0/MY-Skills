// Day 5 
// Topic :- Asynchronous Javascript

// First we know what is synchronous:-
// so up to until what we write all is synchronous code , that are executed by line by line, that uses thread of execution, but why need asynchronous then if it have one problem that is long running operation block code execution, that why we need async..

//Asynchronous code is executed after a task that runs in the "background" finishes.
// and code will non-blocking
//Execution doesn't wait for an asynchronous task to finish its work;


//AJAX Calls
//Asynchronous JavaScript And Xml: Allow us to Communicate with the remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically,so without reloading the page so we can use the data in an Application dynamically.

// HOW AJAX works?
// Client(browser)---> request data (GET/POST/ETC)---> Web server --> response data ---> Client(browser) :- (this is happend asynchronously in the background)


// API
//Application Programming Interface: Piece of Software that can be used by another piece of software, in order to allow applications to talk to each other.
// There are many APIs :- like :- DOM, GEOLOCATION, OWN CLASS API,ONLINE APIs, etc
// Online APIs:- Application running on a server, that receives request for data, and sends data back as response.
//We can build our own Web APIs(requires back-end development, e.g node.js) or use 3rd-party APIs.

//Most APIs this that use JSON data Format instead of XML data format.
// JSON :- Its bassically js obj that converted in to string.

//https://countries-api-836d.onrender.com/countries/



//PROJECT FOR LEARNING
///////////////////////////////////////
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const getCountryData = function(country){

//     const request = new XMLHttpRequest(); // first way to do ajax call or you can say older way
//     request.open('GET',`https://restcountries.com/v2/name/${country}`)
//     request.send();
//     // console.log(request.responseText)
//     request.addEventListener('load',function(){
//         // console.log(this.responseText)
//         const [data] = JSON.parse(this.responseText)
//         console.log(data)

//         const html = `<article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(  +data.population / 1000000).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//             </article>`;

//         countriesContainer.insertAdjacentHTML('beforeend',html)
//         countriesContainer.style.opacity = 1;
//     })
// }

// // getCountryData("")
// getCountryData("bharat")
// getCountryData("China")


// Callback hell
/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/


///////////////////////////////////////
// Welcome to Callback Hell

/*
const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('portugal');
getCountryAndNeighbour('usa');*/


// Promise 
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal')
// console.log(request)

// Promise:- An object is used as a placeholder for the future result of an asynchronous operation

// we no longer to rely on events and callbacks passed into asynchronous functions to handle asynchronous results;
//Instead of nesting callback, we can chain promises for a sequence of asynchronous opr: escapibg callback.

//LifeCycle of promises
// Pending(Before the future value is available)-->(async task) --> Settled(Asynchronous task has finished)-->(fulfilled,Rejected)

// Consuming Promises
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
};

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
//         console.log(response)
//         return response.json()
//     }).then(function(data){
//         console.log(data)
//         renderCountry(data[0])
// })
// }
// getCountryData("portugal")


// Chaining Promises
const renderErr = function(msg){
    countriesContainer.insertAdjacentText('beforeend',msg)
    // countriesContainer.style.opacity = 1;
}
const getCountryData = function(country){
    fetch(`https://restcountries.com/v2/name/${country}`).then(function(response){
        console.log(response)
        if(!response.ok)
            throw new Error(`Country not found (${response.status})`)
        return response.json()
        //function(err){
            //alert(err)}
    }).then(function(data){
        console.log(data)
        renderCountry(data[0])
        const neighbour = data[0].borders?.[0]
        if(!neighbour) return
        return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        }).then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data)
            renderCountry(data,"neighbour")

        }).catch(function(err){
            console.log(err)
            alert(err)
            renderErr(err)

        }).finally(function(){
            countriesContainer.style.opacity = 1;
        })
}


// Handling Rejected Promises

btn.addEventListener('click',function(){
    getCountryData("bharat")
})


//Async fn



