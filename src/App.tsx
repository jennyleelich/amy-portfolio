import {  Routes, Route } from "react-router-dom";

import About from "./components/About";
import Works from "./components/Works";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </section>
  );
};

export default App;