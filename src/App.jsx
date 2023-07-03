import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Homes from "./components/Homes";
import About from "./components/About";
import ProjectSample1 from "./components/ProjectSample1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectSample2 from "./components/ProjectSample2";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
      <Header />
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <ProjectSample1 />
          <ProjectSample2 />
          <ProjectSample1 />
          <ProjectSample2 />
          <ProjectSample1 />
          <ProjectSample2 />
          <Contact />
          <Footer /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
