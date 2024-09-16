import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import { Footer, Navbar } from "./Components";

import {Events} from "./pages";
import { Events_secA } from "./pages";
import { Home } from "./pages";



import "./App.css";
import"./index.css";

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Events_secA" element={<Events_secA />} />
      </Routes>
     <Footer/>
    </div>
  );
};

export default App;
