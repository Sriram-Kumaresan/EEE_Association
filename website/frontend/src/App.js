import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events,Events_secA,Events_secB,Events_secC,Events_secD,Events_secE,Home,Contact,Workshop, Colloquium,Cine, Dialux, Description, Flash,Meta,Projectexpo,Robo,Sherlock,Snakes,Tycoon,Error} from './pages'


import "./App.css";
import"./index.css";

// import Workshop from './pages/Workshop/Workshop';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Workshop />} />
        {/* <Route path="/" element={<Cine />} /> */}
        <Route path="/colloquium" element={<Colloquium />} />
        <Route path="/description" element={<Description />} />
        <Route path="/dialux" element={<Dialux />} />
        <Route path="/error" element={<Error />} />
        <Route path="/flash" element={<Flash />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/projectexpo" element={<Projectexpo />} />
        <Route path="/robo" element={<Robo />} />
        <Route path="/sherlock" element={<Sherlock />} />
       <Route path="/snakes" element={<Snakes />} />
        <Route path="/tycoon" element={<Tycoon />} />
        <Route path="/Events_secA" element={<Events_secA />} />

       
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
