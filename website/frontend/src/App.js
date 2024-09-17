import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Events from './pages/Events/Events';
import Events_secA from './pages/Events_secA/Events_secA';
import Events_secB from './pages/Events_secB/Events_secB';
import Events_secC from './pages/Events_secC/Events_secC';
import Events_secD from './pages/Events_secD/Events_secD'; 
import Events_secE from './pages/Events_secE/Events_secE';
import Contact from './pages/Contact/Contact';

import './App.css';
import './index.css';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/Events_secA" element={<Events_secA />} />
        <Route path="/Events_secB" element={<Events_secB />} />
        <Route path="/Events_secC" element={<Events_secC />} />
        <Route path="/Events_secD" element={<Events_secD />} />
        <Route path="/Events_secE" element={<Events_secE />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
