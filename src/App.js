import React from 'react';
import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./components/Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;