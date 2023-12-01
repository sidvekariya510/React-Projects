import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import RCC from './ClassComponents/RCC'
import PhoneBook from './Components/PhoneBook';
import Products_API from './Components/Products_API';
import Marksheet from './Components/Marksheet';
import TodoList from './Components/TodoList'
import Axios from './Components/Axios';
import ViewProduct from './Components/ViewProduct';
import Login from './Components/Login';


function App() {

  const [logo, setLogo] = useState("R E A C T")
  const [login, setLogin] = useState("Login")
  return (
    <>
      <div className="App row g-0">
        <div className='left col-12 col-lg-3'>
          <div className="sidebar">
            <a href="/" className="text-start text-decoration-none">
              <Header logo={logo} login={login} />
            </a>

            <div className="dropdown p-2">
            <hr className='text-light' />
              <a href="" className="d-flex px-3 pb-3 align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://avatars.githubusercontent.com/u/131512661?s=400&u=8d9a8c2f3aed2f0f28b6ff873b326f7526fbb335&v=4" alt="" width="32" height="32" className="rounded-circle me-2" />
                <span className='text-warning'>Siddharth</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="https://github.com/sidvekariya510" target='_blank'>Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div >
        <div className="right col-12 col-lg-9 mt-lg-0 my-lg-0">
          <Routes>
            <Route path='/Products_API' element={<Products_API />} />
            <Route path='/PhoneBook' element={<PhoneBook />} />
            <Route path='/TodoList' element={<TodoList />} />
            <Route path='/RCC' element={<RCC />} />
            <Route path='/Marksheet' element={<Marksheet />} />
            <Route path='/Axios' element={<Axios />} />
            <Route path='/ViewProduct/:productId' element={<ViewProduct />} />
            <Route path='/Login' element={<Login />} />
          </Routes>
        </div >
      </div >
    </>
  );
}

export default App;
