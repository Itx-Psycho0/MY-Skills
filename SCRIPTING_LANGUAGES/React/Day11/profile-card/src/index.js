import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
    return(
        <div>
            <img  className="avatar" src="pfp.jpg" alt="profile picture" />
        </div>
    )
}

function Intro() {
  return (
    <div>
      <h1>I am who?</h1>
      <p>Correction: Who am I?</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill = {"javaScript"} />
      <Skill skill = {"CSS"}/>
      <Skill skill = {"HTML"}/>
    </div>
  );
}

function Skill  (props) {
  return (
    <div className="skill" >
        <p >{props.skill}</p>
    </div>
  );
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
