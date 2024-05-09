import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
    </div>
  );
}

export default App;

