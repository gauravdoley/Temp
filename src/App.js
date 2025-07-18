import React from 'react';
import Navbar from './components/Navbar';
import BlogLayout from './components/BlogLayout';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BlogLayout />
    </div>
  );
}

export default App;