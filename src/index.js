import React, { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

function HydrationTest() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <App />
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? 'Clicked!' : 'Click me'}
      </button>
    </div>
  );
}

hydrateRoot(document.getElementById('root'), <HydrationTest />);
