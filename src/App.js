import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        |
        <Link to="/blog/1">Blog 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
