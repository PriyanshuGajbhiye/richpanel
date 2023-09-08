import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register"; // Import the Register component here

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add more routes for other app features */}
        <Route path="/register" element={<Register />} />{" "}
        {/* Route for Register component */}
      </Routes>
    </Router>
  );
}

export default App;
