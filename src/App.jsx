import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './compnents/Home'
import CreateUser from './compnents/CreateUser'
import ShowUser from './compnents/ShowUser'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CreateUser' element={<CreateUser></CreateUser>} />
      <Route path='/ShowUser' element={<ShowUser></ShowUser>} />
    </Routes>
  )
}

export default App
