//------------------------------ Day 6: JavaScript Basics ------------------------------//

// Today's Topic is Document Object Model (DOM) Manipulation, Forms and ansynchronous JavaScript (timers)

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

