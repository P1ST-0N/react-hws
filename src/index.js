import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);