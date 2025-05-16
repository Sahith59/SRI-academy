import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Video from './components/Video';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Faculty />
          <Results />
          <Video />
          <Facilities />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;