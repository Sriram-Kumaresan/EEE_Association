import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {EventsProject,EventsFrame,EventsTreasure,EventsCircuit,EventsPhoton,SignIn,Registration} from './pages'


import "./App.css";
import"./index.css";


import {Description,
  EventTwoDes,
  Events,
  EventsPaperP,
  Home,
  Contact,
  Payment,
  Accomodation} from './pages'

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
        <Route path="/event2" element={<EventTwoDes />} />
        <Route path="/events_paper_p" element={<EventsPaperP />} />
        <Route path="/events_Project" element={<EventsProject />} />
        <Route path="/events_Frame" element={<EventsFrame/>} />
        <Route path="/events_Treasure" element={<EventsTreasure />} />
        <Route path="/events_Circuit" element={<EventsCircuit />} />
        <Route path="/events_photon" element={<EventsPhoton />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/events" element={<Events/>} />
        <Route path="/accomodation" element={<Accomodation />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
