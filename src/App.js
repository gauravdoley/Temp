import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogLayout from './components/BlogLayout';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      {/* This component now handles all scroll-to-top behavior */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<BlogLayout />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
