import React from 'react'
import Header from '../components/Header'
import Homes from '../components/Homes'
import About from '../components/About'
import ProjectSample1 from "../components/ProjectSample1"
import ProjectSample2 from '../components/ProjectSample2'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop'
import SmoothScrollbar from 'smooth-scrollbar'

const Home = () => {
  return (
    <div>
    {/* <SmoothScrollbar /> */}
     <ScrollToTop />
        <Homes />
        <About />
        <ProjectSample1 name="Tesla-Clone" desc="Introducing our Tesla clone project: a game-changing fusion of style, technology, and sustainability. With zero emissions, exceptional performance, and a futuristic design, our clone reimagines the driving experience. Join us as we revolutionize the automotive industry and pave the way for a greener future."  backimg="/images/tesla-clone.png"/>
          <ProjectSample2  name="moneyMosaic" desc="Introducing our financial calculator app - the ultimate tool for financial planning and analysis. With a user-friendly interface, our app enables you to effortlessly calculate loan payments, investment returns, savings goals, and more. Take control of your finances and make informed decisions with our comprehensive and intuitive financial calculator app."  backimg="/images/money-mosaic.png"/>
          {/* <ProjectSample1 /> */}
          {/* <ProjectSample2 /> */}
          {/* <ProjectSample1 /> */}
          {/* <ProjectSample2 /> */}
          <Contact />
        <Footer />
    </div>
  )
}

export default Home