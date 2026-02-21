import React, { useEffect } from 'react'

const Timer = ({dispatch, secondsRemaining}) => {
    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60
    useEffect(() => {
        const timer = setInterval(() => {
            dispatch({type: 'tick'})
        }, 1000)
        return () => clearInterval(timer)
    }, [dispatch])
  return (
    <div className='timer'>
{mins.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
    </div>
  )
}

export default Timer
