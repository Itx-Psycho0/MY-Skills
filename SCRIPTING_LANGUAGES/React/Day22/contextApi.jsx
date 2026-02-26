// context APi:- 
// Context API is a way to pass data through the component tree without having to pass props down manually at every level. It allows you to share values between components without having to explicitly pass a prop through every level of the tree.

// To create a context, you can use the createContext function from the React library. This function returns an object with two properties: Provider and Consumer. The Provider component is used to provide the context value to its children, while the Consumer component is used to consume the context value in a child component.
// Here's an example of how to use the Context API:

import React, { createContext, useState } from 'react';

// Create a context
const MyContext = createContext();

// Define a Provider component
const MyProvider = ({ children }) => {  
    const [value, setValue] = useState('Hello, World!');
    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

//value is the data that we want to share across components, and setValue is a function that allows us to update that value. We pass both of these as an object to the Provider's value prop, so that any component that consumes this context can access and update the value.

// Define a Consumer component
const MyConsumer = () => {
    return (
        <MyContext.Consumer>
            {({ value, setValue }) => (
                <div>
                    <h1>{value}</h1>
                    <button onClick={() => setValue('New Value!')}>Change Value</button>
                </div>
            )}
        </MyContext.Consumer>
    );
};

export default function App() {
    return (
        <MyProvider>
            <MyConsumer />
        </MyProvider>
    );
}

