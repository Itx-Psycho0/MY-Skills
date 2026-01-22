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
      <h1>Who am I?</h1>
      <p>Professional overthinker and part-time adventurer. I speak fluent sarcasm and movie quotes. Here for a good time and the best tacos in town.</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill = {"javaScript"}  color = {"yellow"}/>
      <Skill skill = {"CSS"} color = {"blue"}/>
      <Skill skill = {"HTML"} color = {"red"}/>
    </div>
  );
}

function Skill  (props) {
  return (
    <div style={{backgroundColor:props.color}} className="skill" >
        <p>{props.skill}</p>
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
