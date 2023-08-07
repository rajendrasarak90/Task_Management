import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
// console.log(process.env.REACT_APP_BASE_URL);
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}
