import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import Events from "./pages/Events/Events";
import Events_secA from "./pages/Events_secA/Events_secA";


import "./App.css";
import"./index.css";

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/Events_secA" element={<Events_secA />} />

       
      </Routes>
     
    </div>
  );
};

export default App;
