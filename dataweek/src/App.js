
import './App.scss';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BarRoelPage from "./components/BarRoelPage";
import BarAmandaPage from './components/BarAmandaPage';
import BarStijnPage from './components/BarStijnPage';

function App() {

  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/bar-roel">Visualization Roel</Link>
        <Link to="/bar-amanda">Visualization Amanda</Link>
        <Link to="/bar-stijn">Visualization Stijn</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bar-roel" element={<BarRoelPage />}/>
        <Route path="/bar-amanda" element={<BarAmandaPage />}/>
        <Route path="/bar-stijn" element={<BarStijnPage />}/>
      </Routes>
    </div>
  );
}

export default App;
