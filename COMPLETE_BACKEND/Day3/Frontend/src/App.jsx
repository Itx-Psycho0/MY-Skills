import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/contact' element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App
