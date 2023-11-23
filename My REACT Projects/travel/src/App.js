import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Routes>
        {/* Home is the main file */}
        <Route path='/Home' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      {/* footer is common for all sub pages*/}
      <Footer />
    </>
  );
}

export default App;
