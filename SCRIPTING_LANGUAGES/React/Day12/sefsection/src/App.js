import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  function handlePrevious() {
    if (step > 1) setStep((s)=>s-1);
  }
  function handleNext() {
    if (step < 3) setStep((s)=>s+1);
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is)=>!is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2 </div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;

// State :- Data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle.
//Components memory
// State Variable / piece of state : A single variable in a component(component state)
//Updating component state triggers React to re-render the component
// component render make view and view combine make UI.

// if we give object array in usestate we can mutate ut without setfn but it is bad practice so always do with setfn

// We don't do direct dom manipulations :- Because react is declarative

// State preserved throughtout re-renders

// component desapier from the ui entirely called unmounting

//Guidelines
// Use a state var for any data that the component should keep track of "remember" over time. This is data that will change at some point . In vanilla js, that's a let var, or an[] or {}

//Whenever you want to somethind in the component to be dynamic, create a piece of state related to that "thing", and update the state when the thing should change.

// if you want to change the way a component looks, or the data it displays, update its state. This usually happens in an event handler fn.

// When building a component, imagine its view as a reflection of state changing over time.

// For data that should not trigger component re-renders, don't use state. Use a regular var instead.