import React, { useState } from 'react';

function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? 'Clicked!' : 'Click me'}
      </button>
    </div>
  );
}

export default Home;
