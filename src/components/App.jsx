// import React from 'react';
// import gridPages from './assets/grid-pages.jpg';
// import './App.css';

// function App() {
//   return (
//     <div className="bg-container">
//       <div className="page-container">
//         <img className="grid-pages" src={gridPages} alt="" />
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import ContactMe from "../pages/ContactMe";


function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route exact path='/resume' element={<Resume />}></Route>
          <Route exact path='/contact-me' element={<ContactMe />}></Route>
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

