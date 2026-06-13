import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import PortfolioIntro from "./components/portfolio/PortfolioIntro";
import Contact from "./components/getInTouch/Contact";
import About from "./components/about/About";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioIntro />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
