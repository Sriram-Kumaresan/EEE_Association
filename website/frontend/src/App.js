import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events_Project,Events_Frame,Events_Treasure,Events_Circuit,Events_photon} from './pages'


import "./App.css";
import"./index.css";


import {Description,
  SignIn,
  Registration,
  EventTwo_des,
  Events,
  Events_paper_p,
  Events_secB,
  Events_secC,Events_secD,
  Events_secE,
  Home,
  Contact,
  Accomodation,
  Payment,
  Teams} from './pages'

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
        <Route path="/event1" element={<Description />} />
        <Route path="/event2" element={<EventTwo_des />} />
        <Route path="/paperpursuit" element={<Events_paper_p />} />
        <Route path="/projectopoly" element={<Events_Project />} />
        <Route path="/frameflix" element={<Events_Frame/>} />
        <Route path="/treasurelogic" element={<Events_Treasure />} />
        <Route path="/circuitcharades" element={<Events_Circuit />} />
        <Route path="/photonkickoff" element={<Events_photon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/accomodation" element={<Accomodation />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
