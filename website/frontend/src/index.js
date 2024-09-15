import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import './index.css';
// import 'normalize.css';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-0HLNW2W47S');

    ReactDOM.createRoot(document.getElementById('root')).render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    ); 