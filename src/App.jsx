import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Works from "./components/works/Works";
import Journal from "./components/journal/Journal";
import Contact from "./components/getInTouch/Contact";
import About from "./components/about/About";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/journal" element={<Journal/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
