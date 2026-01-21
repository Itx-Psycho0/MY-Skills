import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return <div>
    <h2>Pizza</h2>
    <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci" />
    <p>Tomato, mozarella, spinach, and ricotta cheese</p>
  </div> ;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
