import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

import Home from "./Content/Home";
import Solution from "./Content/Solution";
import { useEffect } from 'react';

import Service from "./Content/Service";
import Contact from "./Content/Contact";
import WebFont from 'webfontloader';

export default function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka', 'Ubuntu', 'Libre Franklin']
      }
    });
   }, []);


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