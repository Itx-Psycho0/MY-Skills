import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];


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
      {skills.map((skill) => <Skill skill={skill.skill} level={skill.level} color={skill.color} />)}
    </div>
  );
}

function Skill  ({skill,level,color}) {
  return (
    <div style={{backgroundColor:color}} className="skill" >
        <span>{skill}</span>
        <span>{level === "beginner"&&"⭐"}{level === "intermediate"&&"⭐⭐"}{level === "advanced"&&"⭐⭐⭐"}</span>
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
