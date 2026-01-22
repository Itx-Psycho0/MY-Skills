import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import './index.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = {color: "red",fontSize:"50px"}
  const style = {};
  return( 
    <header className="header">
      <h1 style={style} >Fast React Pizza Co.</h1>
    </header>
  )}
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10} />
      <Pizza name="Pizza Funghi" ingredients="Tomato, mozarella, mushrooms, and onion" photoName="pizzas/funghi.jpg" price={12} />
      
    </main>
  );
}
function Footer() {
    const hr = new Date().getHours();
    const openHr = 12;
    const closeHr = 22;
    const isOpen = hr >= openHr && hr <= closeHr;
    console.log(isOpen);
    // isOpen? alert("we're currently open") : alert("we're closed");
  return (
    // React.createElement('footer',null, "We're currently open")
    <footer className="footer"> {new Date().toLocaleTimeString()}We're currently open</footer>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName}alt={props.name} />
      <div>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price + 1}</span>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// what is jsx - jsx is declarative syntax to describe what component look like and how they work ,
// component must return a block of jsx
// jsx is extension of js that allows us to embed js, css and react components into html.
// jsx simple convert to code in js with written html look a dom manipulation. by babel.
// we would use React without jsx

// imperative - manual dom element selections and dom traversing, step by step dom mutations .

// declarative - describe what ui should look like using jsx, based on current data.

//Props are used to pass data from parent components to child components(down the component tree)
//Essential tool to configure and customize components(like function parameters)
//With props, parent components control how child components look and work
//Anything can be passed as props: single values, arrays, objects, functions, even other components

//props is data coming from the outside, and can only be updated by the parent component
//state is internal data that can be updated by the component's logic

// props are read-only, they are immutable! this is one of React's strict rules.

//if you need to mutate props, you actually need state

// mutating props would affect parent, creating side effects(not pure)
// components have to be pure functions in terms of props and state.

// this allows react to optimize apps, avoid bugs, make apps predictable.

// react use - One way data flow 

//rules of jsx
// jsx works essentially like html, but using {} we can enter in js mode.
// in jsx statments are not allowed(if/else,for,switch)
// jsx produces a js expression
// A piece of jsx can only have one root element. if you need more, use <react.fragment>(or the short <>)

// diff b/w in jsx and html
// className instead of Html's class
// htmlfor instead of Html's for
// every tag needs to be closed.
// all event handlers and other properties need to be camelCased
// Css inline are written like this {{style}}(to ref a variable, and then an obj)
// css property names also camelCased
// comments need to be in {}(bcz they are js)