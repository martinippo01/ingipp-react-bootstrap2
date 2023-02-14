import './App.css';
import React from 'react'
import MyNavBar from "./components/MyNavBar";

import BottomNavBar from "./components/BottomNavBar";

// React router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Capacitacion from "./components/Capacitacion";
import Consultoria from "./components/Consultoria";
import Docencia from "./components/Docencia";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <MyNavBar></MyNavBar>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/docencia" element={<Docencia/>}></Route>
                <Route path="/consultoria" element={<Consultoria/>}></Route>
                <Route path="/capacitacion" element={<Capacitacion/>}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>

            <BottomNavBar></BottomNavBar>
        </div>
      </BrowserRouter>
  );
}

export default App;
