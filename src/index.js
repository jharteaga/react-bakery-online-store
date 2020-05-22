import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter
    basename={process.env.PUBLIC_URL || '/react-bakery-online-store'}
  >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
