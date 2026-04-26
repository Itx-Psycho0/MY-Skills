import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, input])
        setInput('')
    }

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index))
    }


    return (
        <div>
            <h2 className='heading'>Checklist</h2>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Add</button>
            </form>

            {
                todos.map((todo, index) => (
                    <ul key={index} className='todos'>
                        <li>{todo}</li>
                        <button onClick={() => handleDelete(index)} className='delete'>X</button>
                    </ul>
                ))
            }
        </div>
    )
}

export default Todo