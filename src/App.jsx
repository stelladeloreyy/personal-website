import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import React from 'react';
import { useState } from 'react';

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [lang, setLang] = useState("en");
  
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home setLang={setLang} lang={lang} />}></Route>
          <Route exact path='/about' element={<About setLang={setLang} lang={lang} />}></Route>
          <Route exact path='/projects' element={<Projects setLang={setLang} lang={lang} />}></Route>
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

