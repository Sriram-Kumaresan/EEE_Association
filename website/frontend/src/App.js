import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events,Events_secB,Events_secC,Events_secD,Events_secE,Home,Contact,Workshop, Colloquium,Cine, Dialux, Description, Flash,Meta,Projectexpo,Robo,Sherlock,Snakes,Tycoon,Error,Scavenger} from './pages'
import {Events_Project,Events_Frame,Events_Treasure,Events_Circuit,Events_photon} from './pages'


import "./App.css";
import"./index.css";


import {
  SignIn,
  Registration,
  EventTwo_des,

  Events_paper_p,
 
 

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
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/cine" element={<Cine />} />
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
        <Route path="/scavenger" element={<Scavenger />} />
        {/* <Route path="/Events_secA" element={<Events_secA />} /> */}

       
        <Route path="/" element={<Home />} />
        <Route path="/event1" element={<Description />} />
        {/* <Route path="/event2" element={<EventTwo_des />} />  */}
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
