import {  useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <FlashCards questions={questions} />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards(props) {
  const [selectedId,setSelectedId]=useState(null);



  function handleRotate(id){
    setSelectedId(id === selectedId ? null : id);

  }
  return (
    <>
    <div className="flashcards">
        {props.questions.map((question) => (
          <div key={question.id} onClick={(e)=>{handleRotate(question.id); console.log(selectedId)}} className={selectedId === question.id ? "selected" : ""}>
          <p>{selectedId === question.id ? question.answer : question.question}</p>
          </div>))}
      </div>
    </> 
  );
}


// {props.questions.map((question) => (
        //   <p key={question.id}>{question.question}</p>
        // ))}