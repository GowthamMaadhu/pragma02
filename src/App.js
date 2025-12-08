import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home from "./pages/Home"
import Cybersecurity from "./pages/Cybersecurity";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybersecurity" element={<Cybersecurity/>} />
      </Routes>
    </Router>
  );
}

export default App;
