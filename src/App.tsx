import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
