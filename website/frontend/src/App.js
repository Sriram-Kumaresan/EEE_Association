import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";

import Events from "./pages/Events/Events";
import Events_secA from "./pages/Events_secA/Events_secA";


import "./App.css";
import"./index.css";
import { Description, EventTwo_des } from "./pages";

const App = () => {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Description />} />
        {/* <Route path="/" element={<EventTwo_des />} /> */}
        {/* <Route path="/Events_secA" element={<Events_secA />} /> */}

       
      </Routes>
     
    </div>
  );
};

export default App;
