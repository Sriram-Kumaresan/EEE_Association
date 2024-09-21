import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import {Navbar, Footer} from './Components'
import {Events,Events_paper_p,Events_Project,Events_Frame,Events_Treasure,Events_Circuit,Events_photon,Home,Contact,Accomodation} from './pages'


import "./App.css";
import"./index.css";
import { Description,
   EventTwo_des,
   Payment,
  
  } from "./pages";

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
        <Route path="/Payment" element={<Payment />} />

        {/* <Route path="/" element={<EventTwo_des />} /> */}
        {/* <Route path="/Events_secA" element={<Events_secA />} /> */}

       
        <Route path="/" element={<EventTwo_des />} />
        <Route path="/events_paper_p" element={<Events_paper_p />} />
        <Route path="/events_Project" element={<Events_Project />} />
        <Route path="/events_Frame" element={<Events_Frame/>} />
        <Route path="/events_Treasure" element={<Events_Treasure />} />
        <Route path="/events_Circuit" element={<Events_Circuit />} />
        <Route path="/events_photon" element={<Events_photon />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/events" element={<Events/>} />
        <Route path="/accomodation" element={<Accomodation />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
