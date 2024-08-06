import React from 'react';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Works from './components/Works';
import Challenges from './components/Challenges';
import Chat from './components/Chat';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Gallery />
        <Services />
        <Works />
        <Challenges />
        <Chat />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
