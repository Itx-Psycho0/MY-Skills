import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = () => {
    if (!newTask.trim()) return

    if (todos.includes(newTask)) {
      alert("Task already exists")
      return
    }

    setTodos([...todos, newTask])
    setNewTask("")
  }

  return (
    <div>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>

      <input
        type="text"
        value={newTask}
        onChange={handleChange}
      />

      <button onClick={addTask}>Add Todo</button>
    </div>
  )
}

export default Todo
