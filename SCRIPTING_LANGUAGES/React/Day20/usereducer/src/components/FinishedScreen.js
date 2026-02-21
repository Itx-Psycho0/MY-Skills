import React from 'react'

const FinishedScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
    const percentage = (points / maxPossiblePoints) * 100
  return (
    <>
    <p className='result'>
        You scored <strong>{points}</strong> out of <strong>{maxPossiblePoints}</strong> ({Math.round(percentage)}%)
    </p>
    <p className='highscore'>
        Highscore: <strong>{highscore} points</strong>
    </p>
    <button className='btn btn-ui' onClick={() => dispatch({type: 'restart'})}>Restart Quiz</button>
    </>
  )
}

export default FinishedScreen
