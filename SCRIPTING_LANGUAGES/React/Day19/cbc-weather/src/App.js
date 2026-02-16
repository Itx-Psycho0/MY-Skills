import React from 'react';

class Counter extends React.Component {
  constructor(props){
    super(props);


    this.state = {
      count: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    this.setState((cur) => {
      return { count: cur.count - 1 };
    });
  }

  handleIncrement() {
    this.setState((cur) => {
      return { count: cur.count + 1 };
    });
  }

  render(){
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
export default Counter;


// Difference between functional and class components:

// 1) Syntax: Class components use ES6 class syntax, while functional components are plain JavaScript functions.

// 2) State and Lifecycle: Class components can have state and lifecycle methods, while functional components were originally stateless. However, with the introduction of React Hooks, functional components can now also manage state and side effects.

// 3) Performance: Functional components are generally simpler and can be more performant than class components, especially when using React Hooks, as they avoid the overhead of class instantiation and method binding.

// 4) Readability: Many developers find functional components to be more concise and easier to read, especially for simple components that do not require state or lifecycle methods. 

// 5) Future of React: The React team has indicated that they are focusing on functional components and hooks for future development, and they recommend using functional components for new code.

// 6) Testing: Functional components can be easier to test due to their simpler structure and lack of lifecycle methods, which can make them more predictable and easier to mock in tests.

// Overall, while both class and functional components are still supported in React, functional components with hooks are generally recommended for new development due to their simplicity and improved performance.

// In the context of the provided code, the Counter component is a class component that manages its own state to keep track of the count. It has two methods, handleIncrement and handleDecrement, which update the state when the respective buttons are clicked. The render method returns JSX that displays the current count and the buttons to increment and decrement it.

// History of class components and functional components in React:

// React was initially released in 2013, and at that time, class components were the primary way to create components in React. Class components allowed developers to manage state and lifecycle methods, which were essential for building interactive applications.

// Functional components were also available from the beginning, but they were stateless and primarily used for presentational purposes. They were simpler and easier to read, but they lacked the ability to manage state or use lifecycle methods.

// In 2018, with the release of React 16.8, the React team introduced Hooks, which allowed functional components to manage state and side effects. This was a significant shift in how developers could build components in React, as it enabled functional components to do everything that class components could do, while also being more concise and easier to read.

// Since the introduction of Hooks, there has been a trend towards using functional components for new development in React. The React team has indicated that they are focusing on functional components and hooks for future development, and they recommend using functional components for new code. However, class components are still supported and can be used in existing codebases, and there are still some use cases where class components may be preferred, such as when working with certain third-party libraries or when dealing with complex state management.  

