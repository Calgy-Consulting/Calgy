import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Header from "./Components/Header";
import Home from "./Content/Home";
import Solution from "./Content/Solution";

import Service from "./Content/Service";
import Contact from "./Content/Contact";




export default function App() {

    return (

      <div className="App">
      <Router>
       
       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/solutions' element={<Solution/>}/>
          
          <Route exact path='/services' element={<Service/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
       
      </Router>

    </div>

    );
  } 