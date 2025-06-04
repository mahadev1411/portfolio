import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">Mahadev</NavLink>
          <ul className="nav-menu">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/experience" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/academics" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Academics
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/skills" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <footer className="footer">
        <p>© 2025 Mahadev. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;