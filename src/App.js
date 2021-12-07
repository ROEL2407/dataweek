
import './App.scss';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Visualization from "./components/Visualization";
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/visualization">Visualization</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualization" element={<Visualization />}/>
      </Routes>
    </div>
  );
}

export default App;
