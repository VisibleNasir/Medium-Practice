import { useState } from 'react'
import {BrowserRouter , Route , Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/blog/:id' element={<Blog/>} />
          <Route path='/blogs' element={<Blogs/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
