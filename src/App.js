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
      <Card
        img="kate.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;

