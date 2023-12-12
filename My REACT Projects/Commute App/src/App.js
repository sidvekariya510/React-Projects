import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

function App() {
  const [brand, setBrand] = useState("Bagpackers..")
  return (
    <>
      <Routes>
        {/* blank path for content to show at reload. */}
        <Route path='/' element={<Home />} />
        {/* Home is the main file */}
        <Route path='/Home' element={<Home brand={brand} />} />
        <Route path='/AboutUs' element={<AboutUs brand={brand} />} />
        <Route path='/Services' element={<Services brand={brand} />} />
        <Route path='/Gallery' element={<Gallery brand={brand} />} />
        <Route path='/Contact' element={<Contact brand={brand} />} />
      </Routes>
      {/* footer is common for all sub pages*/}
      <Footer brand={brand}/>
    </>
  );
}

export default App;
