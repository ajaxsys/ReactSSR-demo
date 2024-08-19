import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h1>Blog Page with ID: {id}</h1>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? 'Clicked!' : 'Click me'}
      </button>
    </div>
  );
}

export default Blog;
