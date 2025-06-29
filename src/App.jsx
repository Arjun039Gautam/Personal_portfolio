import Header from './components/header'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/home'
import About from './components/about'
import Project from './components/project'
import Certificates from './components/certificates'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/certificates' element={<Certificates />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
