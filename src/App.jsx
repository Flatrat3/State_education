import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Legislation from './components/Legislation';
import TestsPage from './pages/TestsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/subjects/legislation" element={<Legislation />} />
            <Route path="/tests" element={<TestsPage />} />
            {/* Redirect other section links to Home for now if needed, or handle with ID scrolling */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
