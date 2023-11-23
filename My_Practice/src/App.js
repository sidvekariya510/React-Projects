import React, { useState } from 'react'
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Products_API from './Components/Products_API';
import Marksheet from './Components/Marksheet';
import TodoList from './Components/TodoList'



function App() {

  const [logo, setLogo] = useState("R E A C T")
  const [login, setLogin] = useState("Login")
  return (
    <>
      <Header logo={logo} login={login} />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Products_API' element={<Products_API />} />
        <Route path='/TodoList' element={<TodoList />} />
        <Route path='/About' element={<About />} />
        <Route path='/Marksheet' element={<Marksheet />} />
      </Routes>
      
    </>
  );
}

export default App;
