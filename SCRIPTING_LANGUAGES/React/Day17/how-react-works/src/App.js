import { useState } from "react";

const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={content.at(activeTab).summary} />
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes + 1);
  }
  function handleUndo(){
    setShowDetails(true)
    setLikes(0)
  }
  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}


// render is triggered by updating the code --> then go to render phase where react compares the old virtual DOM with the new virtual DOM and do rendering inside in the react dont has visual changes yet --> then commit phase where react updates the real DOM to reflect the changes in the virtual DOM --> browser paints the screen with the updated DOM.

// render dont have quick when state is updated its scheduled to be rendered but it is not rendered immediately, react batches multiple state updates together and renders them in one go for better performance. so when we click on the button to increment the likes, react will schedule a render but it will not render immediately, it will wait for the next tick of the event loop to see if there are any other state updates that can be batched together. if there are no other state updates, then react will render the component with the updated likes. if there are other state updates, then react will batch them together and render them in one go. this is why we see the likes incrementing by 1 when we click on the button, even though we have two buttons to increment the likes.

// react render the entire thing not a part of the component, when we click on the button to increment the likes, react will render the entire TabContent component, not just the part that displays the likes. this is because react uses a virtual DOM to keep track of the state of the UI, and when a state update occurs, react will re-render the entire component to ensure that the UI is consistent with the state. however, react will only update the parts of the real DOM that have changed, so even though it re-renders the entire component, it will only update the part of the DOM that displays the likes. this is why we see a performance improvement when we use React, because it minimizes the number of updates to the real DOM by only updating what has changed.

// rendering not a viewing the update or thing, it is only calling the function component to get the new virtual DOM, it is not updating the real DOM yet. react will compare the new virtual DOM with the old virtual DOM and determine what has changed, and then it will update the real DOM accordingly. so when we click on the button to increment the likes, react will call the TabContent function component to get the new virtual DOM, but it will not update the real DOM until it has compared the new virtual DOM with the old virtual DOM and determined what has changed. this is why we see a performance improvement when we use React, because it minimizes the number of updates to the real DOM by only updating what has changed.

// render phase --> react elements  --> virtual dom --> reconciliation + diffing fiber tree --> fiber tree --> commit phase --> real dom --> browser paint

// diffing algorithm --> compare old virtual dom with new virtual dom and determine what has changed --> update the real dom accordingly

// react fiber --> data structure that react uses to keep track of the state of the UI --> allows react to break down the rendering work into smaller chunks and prioritize them based on their importance --> allows react to pause and resume rendering work as needed, which improves the responsiveness of the UI. 

// batching --> react batches multiple state updates together and renders them in one go for better performance --> when we click on the button to increment the likes, react will schedule a render but it will not render immediately, it will wait for the next tick of the event loop to see if there are any other state updates that can be batched together. if there are no other state updates, then react will render the component with the updated likes. if there are other state updates, then react will batch them together and render them in one go. this is why we see the likes incrementing by 1 when we click on the button, even though we have two buttons to increment the likes.

// react will only update the parts of the real DOM that have changed, so even though it re-renders the entire component, it will only update the part of the DOM that displays the likes. this is why we see a performance improvement when we use React, because it minimizes the number of updates to the real DOM by only updating what has changed.

// react will call the function component to get the new virtual DOM, but it will not update the real DOM until it has compared the new virtual DOM with the old virtual DOM and determined what has changed. this is why we see a performance improvement when we use React, because it minimizes the number of updates to the real DOM by only updating what has changed.

// if you want to escape the batching behavior and force a render immediately, you can use the flushSync function from the react-dom package. this function allows you to flush any pending state updates and render the component immediately. however, it is generally not recommended to use this function unless you have a specific reason to do so, as it can lead to performance issues if used excessively. instead, it is usually better to let React handle the batching of state updates and rendering for optimal performance. 
//using flushSync to force a render immediately
// import { flushSync } from 'react-dom';