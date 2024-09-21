import React from 'react';
import ReactDOM from 'react-dom/client';import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-0HLNW2W47S');

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

