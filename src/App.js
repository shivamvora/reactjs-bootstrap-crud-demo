import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Home />
      <About />
      <Contact />

    </div>
  );
}

export default App;
