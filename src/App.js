import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header/header.component";
import Home from "./pages/Home/home.component.jsx";
import Country from "./pages/Country-Page/country-page.component";

import "./App.scss";

function App() {
  const [isDark, setIsDark] = useState("");

  const toggleDarckMood = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`${isDark ? "App isDark" : "App"}`}>
        <Header isDark={isDark} setIsDark={toggleDarckMood} />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/countries/:name" element={<Country/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
