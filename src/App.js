import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/LoginForm'
import TimeTable from './components/TimeTable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Login/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='/timeTable' element={<TimeTable/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
