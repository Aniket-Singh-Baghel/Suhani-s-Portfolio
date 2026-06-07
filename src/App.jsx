import { Routes, Route } from "react-router-dom";
import Hero from './components/hero/Hero'
import PortfolioIntro from './components/portfolio/PortfolioIntro'
import About from './components/about/About'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/portfolio" element={<PortfolioIntro />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
