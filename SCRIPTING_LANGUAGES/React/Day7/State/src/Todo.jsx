import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [todos,setTodos]= useState([])
    const [newTask,setNewTask] = useState("")
    const handleChange = (e) =>{
        setNewTask(e.target.value)
    }
    const tasks  = ()=>{
            return (!todos.includes(newTask))? newTask:"Already Exists"
        }
    const AddTask = () =>{
        setTodos([...todos,tasks()])
    }
  return (
    <div>
      {todos.map(t=>(
        <ul key={Math.random()}>
            <li>{t}</li>
        </ul>
      ))}
      <input type="text" value={newTask} onChange={handleChange} />

      <button onClick={AddTask}>Add Todo</button>
    </div>
  )
}

export default Todo
