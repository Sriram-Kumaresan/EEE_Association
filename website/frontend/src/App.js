import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events,Events_secA,Events_secB,Events_secC,Events_secD,Events_secE,Home} from './pages'

import './App.css';
import './index.css';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Events_secA" element={<Events_secA />} />
        <Route path="/Events_secB" element={<Events_secB />} />
        <Route path="/Events_secC" element={<Events_secC />} />
        <Route path="/Events_secD" element={<Events_secD />} />
        <Route path="/Events_secE" element={<Events_secE />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
