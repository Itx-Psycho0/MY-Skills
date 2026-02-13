import React from 'react'
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailePage from './pages/NoteDetailePage.jsx'
// import NotFoundPage from './NotFoundPage.jsx'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailePage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes> 
    <p>Hello World</p>
    </div>
  )
}

export default App
