import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import ProjectSample1 from './components/ProjectSample1'
import ProjectSample2 from './components/ProjectSample2'
import Contact from './components/Contact'
import Footer from './components/Footer'
// import Uwu from './components/Uwu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Header />
      <Home />
      <About />
      <ProjectSample1 />
      <ProjectSample2/>
      <ProjectSample1/>
      <ProjectSample2/>
      <ProjectSample1/>
      <ProjectSample2/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
