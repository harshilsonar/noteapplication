import React from 'react'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import AddNotes from '../pages/AddNotes'
import Login from '../pages/Login'
import Register from '../Pages/Register'
import { Routes, Route } from 'react-router-dom'; 

const Allroutes = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
        <Route path="/notes" element={<Notes/>} />
    <Route path="/add-notes" element={<AddNotes/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />

   </Routes>
  )
}

export default Allroutes