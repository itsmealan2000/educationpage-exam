import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Students from './Pages/AllStudents'




function App() {

  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/students' element={<Students/>}/>
    </Routes>
    </div>
  )
}

export default App