// src/index.js
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';

// 使用 hydrateRoot 方法补水
hydrateRoot(document.getElementById('root'), <App />);
