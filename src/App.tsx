import {  Routes, Route } from "react-router-dom";

import About from "./components/About/About";
import Works from "./components/Works/Works";

import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PaintingDetail1 from "./components/Paintings/PaintingDetail1";
import Paintings from "./components/Paintings/Paintings";

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
        <Route path="/works/paintings" element={<Paintings />} />
        <Route path="/works/painting/1" element={<PaintingDetail1 />} />
      </Routes>
    </section>
  );
};

export default App;