import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div>
        <h1>Práctica N°06: Implementación y Despliegue</h1>

        {/* Navegación con Links */}
        <nav>
          <ul>
            <li><Link to="/home">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
          </ul>
        </nav>

        {/* Rutas */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
