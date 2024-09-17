// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // This is the updated import
import 'semantic-ui-css/semantic.min.css'; // Import Semantic UI CSS
import App from './App';

// Use React 18's createRoot API
const root = ReactDOM.createRoot(document.getElementById('root')); // Correct usage of createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
