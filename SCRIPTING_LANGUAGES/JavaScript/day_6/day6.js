//------------------------------ Day 6: JavaScript Basics ------------------------------//

// Today's Topic is Document Object Model (DOM) Manipulation

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



