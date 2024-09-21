import React,{useEffect} from "react";
import { Routes, Route,useLocation } from "react-router-dom";
// import {SignIn}from './pages';
import {Registration}from './pages';
import './App.css';

function App() {
  const location = useLocation();
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Registration />} />
        {/* <Route path="/" element={<SignIn />} /> */}
      </Routes>
    </div>
  );
}

export default App;
