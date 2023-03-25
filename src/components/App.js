import '../style/App.css';
import Home from './Home';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Wines from './Wines';
import Reds from './Reds';
import Whites from './Whites';
import { getAllWines } from '../api/auth';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Wines" element={<Wines />}></Route>
        <Route path="/reds" element={<Reds  />}></Route>
        <Route path="/whites" element={<Whites />}></Route>
      </Routes>
      

    </div>
  );
}

export default App;
