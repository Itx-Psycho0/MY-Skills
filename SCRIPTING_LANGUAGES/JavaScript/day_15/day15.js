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
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
