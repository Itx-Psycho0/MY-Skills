// What is useRef?
// useRef is a hook in React that allows you to create a mutable reference that persists across re-renders. It can be used to store a reference to a DOM element or any mutable value that you want to keep track of without causing a re-render when it changes.
// Example of using useRef to store a reference to a DOM element:
// import React, { useRef } from 'react';

// const App = () => {
//   const inputRef = useRef(null);

//   const handleClick = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div>
//         <input ref={inputRef} type="text" />
//         <button onClick={handleClick}>Focus Input</button>
//     </div>
//   );
// };

// export default App;
// In this example, we create a reference to the input element using useRef. When the button is clicked, we call the focus method on the input element using the current property of the reference. This allows us to focus the input without causing a re-render of the component.
// Example of using useRef to store a mutable value:
import React, { useRef, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    setCount(countRef.current);
  };
    return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default App;

// In this example, we use useRef to store a mutable value (countRef) that keeps track of the count. When the button is clicked, we increment the countRef and then update the state with the new value. This allows us to keep track of the count without causing unnecessary re-renders when the count changes.

// In summary, useRef is a powerful hook in React that allows you to create mutable references that persist across re-renders. It can be used to store references to DOM elements or any mutable value that you want to keep track of without causing a re-render when it changes.

// Note: When using useRef to store a mutable value, it's important to remember that changes to the current property of the reference will not trigger a re-render of the component. If you need to trigger a re-render when the value changes, you should use state instead.

// Differences between useRef and useState:
// 1. useRef is used to create a mutable reference that persists across re-renders, while useState is used to create a state variable that triggers a re-render when it changes.
// 2. useRef does not cause a re-render when the current property is updated, while useState causes a re-render when the state variable is updated.
// 3. useRef can be used to store a reference to a DOM element, while useState cannot.
// 4. useRef is typically used for accessing and manipulating DOM elements, while useState is used for managing component state and triggering re-renders when the state changes.
// In conclusion, useRef and useState are both important hooks in React that serve different purposes. useRef is used for creating mutable references that persist across re-renders, while useState is used for managing component state and triggering re-renders when the state changes. Understanding the differences between these two hooks can help you choose the right one for your specific use case in your React applications.

