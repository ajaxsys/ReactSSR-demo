import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('root');

const data = window.__INITIAL_DATA__; // 从 SSR 注入的数据
console.log("window.__INITIAL_DATA__", window.__INITIAL_DATA__)

ReactDOM.hydrateRoot(
  rootElement,
  <BrowserRouter>
    <App serverData={data}/>
  </BrowserRouter>
);
