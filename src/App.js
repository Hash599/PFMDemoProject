import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import {Routes ,Route,Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from "./Navbar";
import "./index.css";
import Footer from "./Footer";



const App=()=>{

 
  return(
    <>
  
<Routes>
<Route   path="/" element={<Home/>} />
<Route  path="/about" element={<About/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/service" element={<Service/>} />
<Route  path="/service" element={<Service/>} />


</Routes>

<Footer/>
    </>
  )
} 
export default App;
