import React from 'react'

const StartScreen = ({ numQuestions, dispatch}) => {
  return (
    <div className="start">
      <h2>Welcome to the Quiz App</h2>
      <p>Test your knowledge with our fun and interactive quiz! There are {numQuestions} questions in this quiz.</p>
      <button className='btn btn-ui' onClick={() => dispatch({type: 'start'})}>
        <span>Start Quiz</span>
      </button>
    </div>
  )
}

export default StartScreen
