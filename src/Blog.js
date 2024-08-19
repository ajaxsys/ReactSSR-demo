import React from 'react';
import { useParams } from 'react-router-dom';

function Blog() {
  const { id } = useParams();
  return <h1>Blog Page with ID: {id}</h1>;
}

export default Blog;
