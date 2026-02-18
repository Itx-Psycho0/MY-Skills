import {  useReducer } from "react";

const intialState = {
    count: 0,
    step: 1
  }
  
function reducer(state, action) {
  console.log(state, action);
  switch(action.type) {
    case "dec":
      return {...state, count: state.count - state.step};
    case "inc":
      return {...state, count: state.count + state.step};
    case "setCount":
      return {...state, count: action.payload};
    case "setStep":
      return {...state, step: action.payload};
    case "reset":
      return intialState;
    default:
      throw new Error("Unknown action type");
  }

  // if(action.type === "dec") {
  //   return state - action.payload;
  // }
  // if(action.type === "inc") {
  //   return state + action.payload;
  // }
  // if(action.type === "setCount") {
  //   return action.payload;
  }
  

function DateCounter() {
  // const [count, setCount] = useState(0);

  // const [count, dispatch] = useReducer(reducer, 0);
  // const [step, setStep] = useState(1);
  
  const [state, dispatch] = useReducer(reducer, intialState);
  const {count, step} = state;


  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({type: "dec", payload: 1})
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({type: "inc", payload: 1})
  };

  const defineCount = function (e) {
      dispatch({type: "setCount", payload: Number(e.target.value)})

    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    // setStep(Number(e.target.value));
    dispatch({type: "setStep", payload: Number(e.target.value)})
  };

  const reset = function () {
    dispatch({type:'reset'});
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;



// Why useReducer?

// 1. When you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
// 2. When you want to optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
// 3. When you want to centralize state management logic in a reducer function, making it easier to test and maintain.
// 4. When you want to manage state in a more predictable way, as the reducer function is a pure function that takes the current state and an action, and returns the new state.
// 5. When you want to use the same state management logic across multiple components, as you can reuse the reducer function and dispatch actions from different components.
// In summary, useReducer is a powerful hook that can help you manage complex state logic in a more predictable and maintainable way, especially when you have multiple sub-values or when the next state depends on the previous one.

// reducer is a pure function that takes the current state and an action, and returns the new state. It does not mutate the state directly, but instead returns a new state object based on the action type and payload. This makes it easier to manage state in a predictable way, as you can be sure that the state is only updated through the reducer function and not through direct mutation.

// In the example above, the reducer function handles different action types such as "dec", "inc", "setCount", "setStep", and "reset". Each case in the switch statement returns a new state object based on the current state and the action payload. This allows us to manage the count and step values in a more organized and predictable way, without directly mutating the state.

// actions are plain JavaScript objects that have a type property and an optional payload property. The type property is a string that describes the action being performed, while the payload property can contain any additional data needed to perform the action. Actions are dispatched to the reducer function using the dispatch function returned by the useReducer hook. When an action is dispatched, the reducer function is called with the current state and the action object, and it returns a new state based on the action type and payload. This allows us to manage state in a more predictable way, as we can be sure that all state updates go through the reducer function and are triggered by specific actions.

// dispatch is a function returned by the useReducer hook that allows you to send actions to the reducer function. When you call dispatch with an action object, it triggers the reducer function with the current state and the action as arguments. The reducer function then processes the action and returns a new state based on the action type and payload. This allows you to manage state in a more predictable way, as all state updates go through the reducer function and are triggered by specific actions. You can use dispatch to update the state in response to user interactions or other events in your application.

// dispatch (updating the state in response to an action) -> reducer (processing the action and returning a new state) -> new state (the updated state based on the action) -> component re-render (the component re-renders with the new state) -> UI update (the user interface updates to reflect the new state). This flow allows you to manage state in a predictable way, as all state updates go through the reducer function and are triggered by specific actions.