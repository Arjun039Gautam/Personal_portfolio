import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Project from './components/project'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
