import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
    const hr = new Date().getHours();
    const openHr = 12;
    const closeHr = 22;
    const isOpen = hr >= openHr && hr <= closeHr;
    isOpen? alert("we're currently open") : alert("we're closed");
  return (
    // React.createElement('footer',null, "We're currently open")
    <footer> {new Date().toLocaleTimeString()}We're currently open</footer>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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
