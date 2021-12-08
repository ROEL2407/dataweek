
import './App.scss';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import BarRoelPage from "./components/BarRoelPage";
function App() {

  return (
    <div className="App">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/barroel">Visualization Roel</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barroel" element={<BarRoelPage />}/>
      </Routes>
    </div>
  );
}

export default App;
