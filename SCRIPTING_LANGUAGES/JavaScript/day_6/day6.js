//------------------------------ Day 6: JavaScript Basics ------------------------------//

// Today's Topic is Document Object Model (DOM) Manipulation, Forms and ansynchronous JavaScript (timers) and Data Storage (Local, Session, Cookies)

// What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. 
// It represents the page so that programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// The DOM is not part of the JavaScript language, but it is commonly used with JavaScript to create dynamic web pages.
// The DOM provides a structured representation of the document (like a tree) and defines methods by which these nodes can be accessed and manipulated.
// With the DOM, developers can create, delete, and modify elements and attributes in an HTML document, change styles, and respond to user events.
// The DOM is an essential part of web development, enabling interactive and dynamic user experiences on websites.

//DOM Manipulation
// 1. Selecting Elements
// document.getElementById('idName'): Selects a single element by its ID.

// document.getElementsByClassName('className'): Selects a collection (HTMLCollection) of elements.

// document.querySelector('cssSelector'): Selects the first element that matches the CSS selector (e.g., #id, .class, tag). (Most Recommended)

// document.querySelectorAll('cssSelector'): Selects all matching elements (returns a NodeList, similar to an array).

// and more... we learn through out the journey

//====================================================================================================================================================


// 2. Modifying Content
// .innerText: Changes the visible text (respects CSS styling like display: none).

// .textContent: Changes the text (includes hidden text, faster than innerText).

// .innerHTML: Changes the HTML content (can add tags like <b>Bold</b>).

//====================================================================================================================================================

// 3. Modifying Styles (CSS)
// Direct Style: element.style.color = 'red'; (CamelCase for CSS properties, e.g., backgroundColor).

// Class Manipulation (Best Practice):

// element.classList.add('className')

// element.classList.remove('className')

// element.classList.toggle('className') (Adds if missing, removes if present).

//====================================================================================================================================================

// 4. Attributes
// getAttribute('src'): Gets the value of an attribute.

// setAttribute('src', 'new-image.jpg'): Changes an attribute.

// removeAttribute('disabled'): Removes an attribute completely.

//====================================================================================================================================================

//5. Creating & Deleting Elements
// Create: const btn = document.createElement('button');

// Add to DOM: document.body.appendChild(btn); (Adds to the end) or prepend() (Adds to the start).

// Remove: element.remove(); or parent.removeChild(child);

//====================================================================================================================================================


// Events & Event Handling

// Making the website interactive (responding to clicks, typing, mouse movement).

// 1. Adding Event Listeners
// element.addEventListener('click', function() { ... }); (Best Practice)

// element.onclick = function() { ... }; (Overwrites previous handlers, not recommended)
// Inline HTML: <button onclick="myFunction()">Click me</button> (Not recommended)

//====================================================================================================================================================

// 2. Common Events
// click: User clicks an element.
// mouseover: User hovers over an element.
// keydown: User presses a key.
// submit: User submits a form.
// load: Page or image finishes loading.
// scroll: User scrolls the page.
// input: User types in an input field.
// change: User changes the value of an input field.
// focus: Input field gains focus.
// blur: Input field loses focus.
// and many more...

//====================================================================================================================================================

// 3. Event Object
// When an event occurs, an event object is passed to the event handler function.
// It contains useful information about the event (e.g., target element, mouse position, key pressed).
// Example:
document.addEventListener('click', function(event) {
    console.log('Clicked element:', event.target);
});
//====================================================================================================================================================
// 4. Removing Event Listeners
// element.removeEventListener('click', functionReference);
// Note: The function reference must be the same as the one used in addEventListener.
//====================================================================================================================================================

// Event Delegation
// A technique to handle events efficiently by attaching a single event listener to a parent element.
// The event bubbles up from the target element to the parent, allowing you to manage events for multiple child elements.
document.getElementById('parent').addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.child')) {
        console.log('Child button clicked:', event.target);
    }
});
//====================================================================================================================================================  

// Event Bubbling vs. Capturing
// Bubbling (Default): When you click a child element, the event triggers on the child first, then "bubbles" up to the parent, then the grandparent.

// Capturing: The event goes from the top (Window) down to the target element. Enabled by passing true as the 3rd argument to addEventListener.

// Stopping Propagation: e.stopPropagation() stops the event from traveling further.

//====================================================================================================================================================

// Forms & Validation
// Handling user input and validating form data before submission.

// 1. Accessing Form Elements
// const form = document.getElementById('myForm');
// const input = form.elements['inputName'];

//====================================================================================================================================================

// 2. Form Events
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevents default form submission
//     // Validate and process form data here
// });

//====================================================================================================================================================

// 3. Basic Validation Example
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission
    const input = this.elements['username'];
    if (input.value === '') {
        alert('Username cannot be empty!');
    } else {
        alert('Form submitted successfully!');
    }
});
//====================================================================================================================================================

// Asynchronous JavaScript (Timers)
// Allows you to execute code after a delay or at regular intervals without blocking the main thread.

// 1. setTimeout
// Executes a function once after a specified delay (in milliseconds).
setTimeout(function() {
    console.log('This message is shown after 2 seconds');
}, 2000);


// 2. setInterval
// Executes a function repeatedly at specified intervals (in milliseconds).
const intervalId = setInterval(function() {
    console.log('This message is shown every 3 seconds');
}, 3000);

// To stop the interval, use clearInterval(intervalId);
// clearInterval(intervalId);

// 3. clearTimeout
// Stops a timeout set with setTimeout.
const timeoutId = setTimeout(function() {
    console.log('This message will not be shown');
}, 5000);
// To stop the timeout, use clearTimeout(timeoutId);
clearTimeout(timeoutId);

//====================================================================================================================================================

// Data Storage in the Browser
// Allows you to store data on the client side using Local Storage, Session Storage, and Cookies.

// 1. Local Storage
// Stores data with no expiration date. Data persists even after the browser is closed.
localStorage.setItem('username', 'JohnDoe'); // Store data
const username = localStorage.getItem('username'); // Retrieve data
console.log('Local Storage Username:', username);
localStorage.removeItem('username'); // Remove data
localStorage.clear(); // Clear all data

//Important: Only stores strings. To store Arrays/Objects:

// Save: JSON.stringify(object)

// Retrieve: JSON.parse(string)

//====================================================================================================================================================

// 2. Session Storage
// Stores data for the duration of the page session. Data is lost when the tab is closed.
sessionStorage.setItem('sessionName', 'SessionUser'); // Store data
const sessionName = sessionStorage.getItem('sessionName'); // Retrieve data
console.log('Session Storage Name:', sessionName);
sessionStorage.removeItem('sessionName'); // Remove data
sessionStorage.clear(); // Clear all data

//====================================================================================================================================================

// 3. Cookies
// Small pieces of data stored in the browser, sent to the server with each request. Can have expiration dates.
// document.cookie

document.cookie = "username=JaneDoe; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/"; // Set cookie
console.log('Cookies:', document.cookie); // Retrieve cookies
// Note: Cookies have size limitations and are less secure than Local/Session Storage.
// To delete a cookie, set its expiration date to a past date:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"; // Delete cookie

//====================================================================================================================================================

// Note: Always consider security implications when storing sensitive data on the client side.
// Use HTTPS to encrypt data transmitted between the client and server.
// Use appropriate storage mechanisms based on the data's sensitivity and lifespan requirements.

// ====================================================================================================================================================

// Practice Exercises:
// we will do it in the Dom_practice folder
// 1. Create a simple webpage with a button. When the button is clicked, change the background color of the page.
// 2. Create a form with input fields for name and email. Validate the inputs to ensure they are not empty before submission.
// 3. Create a countdown timer that starts from 10 and counts down to 0, updating every second.
// 4. Store user preferences (like theme color) in Local Storage and retrieve them when the page loads.
// 5. Create a list of items that can be added or removed dynamically using DOM manipulation.
// 6. Implement event delegation to handle clicks on a list of dynamically added buttons.
// 7. Create a simple to-do list application that uses Local Storage to save tasks.
// 8. Create a modal popup that appears when a button is clicked and can be closed by clicking outside the modal or on a close button.
// 9. Create a form that uses both Local Storage and Session Storage to save user input.
// 10. Create a webpage that uses cookies to remember the user's name and greet them on subsequent visits.
// 11. Create a simple image slider that changes images every 3 seconds using setInterval.
// 12. Create a webpage that fetches data from a public API and displays it dynamically using DOM manipulation.
// 13. Create a responsive navigation menu that toggles visibility on smaller screens using event listeners.
// 14. Create a webpage that changes the font size of a paragraph when buttons are clicked (increase/decrease).
// 15. Create a form that validates email format using regular expressions before submission.
// 16. Create a webpage that tracks the number of times a button has been clicked using Local Storage.
// 17. Create a simple quiz application that provides feedback based on user answers using DOM manipulation.
// 18. Create a webpage that displays the current date and time, updating every second using setInterval.
// 19. Create a webpage that allows users to add comments, which are then stored in Local Storage and displayed on the page.
// 20. Create a webpage that uses event capturing to handle clicks on nested elements differently than event bubbling.
// 21. Create a form that saves user input to Session Storage and retrieves it when the page is reloaded.
// 22. Create a webpage that changes the text color of a paragraph when the mouse hovers over it using mouseover and mouseout events.
// 23. Create a webpage that uses cookies to track the number of visits by a user and displays it on the page.
// 24. Create a simple calculator that performs basic arithmetic operations and displays the result using DOM manipulation.
// 25. Create a webpage that allows users to filter a list of items based on a search input using event listeners and DOM manipulation.
// 26. Create a webpage that uses Local Storage to save the state of a checkbox (checked/unchecked) and retrieves it on page load.
// 27. Create a webpage that displays a random quote from an array of quotes each time a button is clicked using DOM manipulation.
// 28. Create a form that uses both Local Storage and Cookies to save user preferences and retrieves them on page load.
// 29. Create a webpage that uses setTimeout to display a message after a delay when a button is clicked.
// 30. Create a webpage that allows users to drag and drop items within a list using DOM manipulation and event listeners.
// and more...

// ====================================================================================================================================================

// Resources to Learn More:
// MDN Web Docs - DOM: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
// MDN Web Docs - Event Handling: https://developer.mozilla.org/en-US/docs/Web/Events
// MDN Web Docs - Forms: https://developer.mozilla.org/en-US/docs/Learn/Forms
// MDN Web Docs - Timers: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
// MDN Web Docs - Web Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
// MDN Web Docs - Cookies: https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
// JavaScript.info - DOM: https://javascript.info/dom-nodes
// JavaScript.info - Events: https://javascript.info/events
// JavaScript.info - Forms: https://javascript.info/forms
// JavaScript.info - Timers: https://javascript.info/settimeout-setinterval
// JavaScript.info - Web Storage: https://javascript.info/localstorage
// W3Schools - DOM Tutorial: https://www.w3schools.com/js/js_htmldom.asp
// W3Schools - JavaScript Forms: https://www.w3schools.com/js/js_validation.asp
// W3Schools - JavaScript Timers: https://www.w3schools.com/js/js_timing.asp
// W3Schools - Web Storage: https://www.w3schools.com/js/js_storage.asp
// W3Schools - JavaScript Cookies: https://www.w3schools.com/js/js_cookies.asp  
// FreeCodeCamp - JavaScript DOM Manipulation: https://www.freecodecamp.org/news/javascript-dom-manipulation-tutorial-with-examples/
// FreeCodeCamp - JavaScript Events: https://www.freecodecamp.org/news/javascript-events-explained-with-examples/
// FreeCodeCamp - JavaScript Forms: https://www.freecodecamp.org/news/javascript-forms-validation-tutorial-with-examples/
// FreeCodeCamp - JavaScript Timers: https://www.freecodecamp.org/news/javascript-timers-settimeout-setinterval-explained-with-examples/
// FreeCodeCamp - Web Storage and Cookies: https://www.freecodecamp.org/news/web-storage-and-cookies-in-javascript-explained/
// YouTube Tutorials:
// Traversy Media - JavaScript DOM Crash Course: https://www.youtube.com/watch?v=0ik6X4DJKCc
// The Net Ninja - JavaScript DOM Tutorials: https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d
// Academind - JavaScript Events Tutorial: https://www.youtube.com/watch?v=XF1_MlZ5l6w
// Dev Ed - JavaScript Forms Tutorial: https://www.youtube.com/watch?v=1Ju5_PLDarg
// Code Explained - JavaScript Timers Tutorial: https://www.youtube.com/watch?v=G8uL0lFFoN0
// Web Dev Simplified - Web Storage and Cookies Tutorial: https://www.youtube.com/watch?v=H3v5k1K8n5A
// Books:
// "JavaScript: The Definitive Guide" by David Flanagan
// "Eloquent JavaScript" by Marijn Haverbeke
// "You Don't Know JS" (book series) by Kyle Simpson
// Online Courses:
// Udemy - The Complete JavaScript Course 2024: From Zero to Expert! by Jonas Schmedtmann
// Coursera - JavaScript, jQuery, and JSON by University of Michigan
// edX - JavaScript Introduction by W3C
// Codecademy - Learn JavaScript
// Pluralsight - JavaScript Fundamentals by Liam McLennan
// Practice Platforms:
// LeetCode - JavaScript Problems: https://leetcode.com/problemset/all/?difficulty=All&status=All&tags=javascript
// HackerRank - JavaScript Challenges: https://www.hackerrank.com/domains/tutorials/10-days-of-javascript
// Codewars - JavaScript Kata: https://www.codewars.com/dashboard
// Exercism - JavaScript Track: https://exercism.org/tracks/javascript
// Project Ideas:
// Build a To-Do List Application
// Create a Weather App using a public API
// Develop a Simple Quiz Game
// Create a Personal Blog Template
// Build a Recipe Finder Application
// Create a Movie Search App using an external API
// Develop a Budget Tracker Application
// Build a Real-time Chat Application
// Create a Portfolio Website
// Develop a Task Management Tool
// Join Developer Communities:
// Stack Overflow: https://stackoverflow.com/questions/tagged/javascript
// Reddit - r/javascript: https://www.reddit.com/r/javascript/
// GitHub - Explore JavaScript Repositories:
// Dev.to - JavaScript Tag: https://dev.to/t/javascript
// Twitter - Follow JavaScript Influencers
// Attend Local Meetups and Conferences
// Practice Regularly and Build Projects to Solidify Your Understanding!
// Happy Coding!

// ====================================================================================================================================================
// ------------------------------ End of Day 6 ------------------------------//