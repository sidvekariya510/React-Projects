import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Cards from "./Cards";
import Footer from "./Footer";
import ColorChange from "./components/ColorChange";
import MyDate from "./components/MyDate";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Cards />
      <Footer/>
      <MyDate />
      <ColorChange />
    </>
  );
}

export default App;
