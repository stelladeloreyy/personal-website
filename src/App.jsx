import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/projects' element={<Projects />}></Route>
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

