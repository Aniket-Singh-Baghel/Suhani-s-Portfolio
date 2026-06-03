import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './components/hero/Hero'
import PortfolioIntro from './components/portfolio/PortfolioIntro'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/portfolio" element={<PortfolioIntro />} />
    </Routes>
    </>
  )
}

export default App
