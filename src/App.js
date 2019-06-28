import React from 'react';
import Commands from './components/Commands';
import Footer from './components/Footer';
import Social from './components/Social';

function App() {
  return (
    <div className="container-fluid">
      <Commands/>
      <Social/>
      <Footer/>
    </div>
  );
}

export default App;
