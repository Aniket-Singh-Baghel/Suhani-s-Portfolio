import { Routes, Route } from "react-router-dom";
import Hero from './components/hero/Hero'
import PortfolioIntro from './components/portfolio/PortfolioIntro'
import Contact from './components/getInTouch/Contact'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/portfolio" element={<PortfolioIntro />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
