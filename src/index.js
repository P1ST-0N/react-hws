import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// added unstable_
ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);