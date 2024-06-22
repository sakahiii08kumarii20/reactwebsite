import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import Weddings from './component/Weddings';
import Birthday from './component/Birthday';
import Candid from './component/Candid';
import Traditional from './component/Traditional'; 
import About from './component/About';
import Contact from './component/Contact';
import './App.css';

import Layout from './component/Layout';
function App() {
  return (
    <Router>
      
      <Layout>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="/portfolio/weddings" element={<Weddings />} />
            <Route path="/portfolio/birthday" element={<Birthday />} />
            <Route path="/portfolio/candid" element={<Candid />} />
            <Route path="/portfolio/traditional" element={<Traditional />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        </Layout>
    </Router>
  );
}

export default App;