import React from 'react'

const Options = ({question}) => {
  return (
      <div className='options'>
        {question.options.map((option) => (
          <button key={option} className='btn btn-option'>{option}</button>
        ))}
      </div>
  )
}

export default Options
