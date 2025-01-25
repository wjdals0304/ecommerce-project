import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './features/home/Home';
import Footer from './components/Footer';
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Home />
      <Footer />
    </HashRouter>
  );
}

export default App;
