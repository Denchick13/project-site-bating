import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';



document.title = 'Galaxy of Love';
createRoot(document.getElementById('root'))
  .render(
    <BrowserRouter>
          <App />
    </BrowserRouter>
  );