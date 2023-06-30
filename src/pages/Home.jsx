import React from 'react'
import Header from '../components/Header'
import Homes from '../components/Homes'
import About from '../components/About'
import ProjectSample1 from "../components/ProjectSample1"
import ProjectSample2 from '../components/ProjectSample2'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
     
        <Homes />
        <About />
        <ProjectSample1 />
          <ProjectSample2 />
          <ProjectSample1 />
          <ProjectSample2 />
          <ProjectSample1 />
          <ProjectSample2 />
          <Contact />
        <Footer />
    </div>
  )
}

export default Home