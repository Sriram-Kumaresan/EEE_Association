import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events,Events_secA,Events_secB,Events_secC,Events_secD,Events_secE,Home,Contact} from './pages'


import "./App.css";
import"./index.css";
import { Description, EventTwo_des } from "./pages";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Description />} />
        {/* <Route path="/" element={<EventTwo_des />} /> */}
        {/* <Route path="/Events_secA" element={<Events_secA />} /> */}

       
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
