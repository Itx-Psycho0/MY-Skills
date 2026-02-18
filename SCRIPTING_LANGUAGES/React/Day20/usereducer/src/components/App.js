import React, {  useEffect, useReducer } from 'react'
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: Array.isArray(action.payload) ? action.payload : [],
        status: 'ready',
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      }
    case 'start':
      return {
        ...state,
        status: 'active',
      }
    case 'newAnswer':
      const question = state.questions.at(state.index)
      return{
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      }
    
    default:
      throw new Error('Unknown action type')
  }
}


const App = () => {
  const [{questions, status, index, answer, points, highscore},dispatch] = useReducer(reducer,initialState)
  const numQuestions = questions.length

  console.log(numQuestions)

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => {
        const questionsData = Array.isArray(data) ? data : data.questions
        dispatch({ type: 'dataReceived', payload: questionsData })
      })
      .catch(() => dispatch({type: 'dataFailed'}))
  }, [])
  return (
    <div className='app'>
      <Header/>
      <Main>
          {status === 'loading' && <Loader/>}
          {status === 'error' && <Error/>}
          {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
          {status === 'active' && <Question question={questions[index]} dispatch={dispatch} answer={answer}/>}
      </Main>
    </div>
  )
}

export default App
