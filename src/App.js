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
import Brandstory from "./Brandstory";
import Whypfm from "./Whypfm";
import PFMprojectcost from "./PFMprojectcost";
import StoneFacadeproject from "./StoneFacadeproject";
import Luxuryinteriorproject from "./Luxuryinteriorproject";
import LandscapeProject from "./LandscapeProject";
import OurProject from "./OurProject";
import InteriorFitout from "./InteriorFitout";
import OneStopVilla from "./OneStopVilla";
import DeliveryProcess from "./DeliveryProcess";
import Video from "./Video";
import Constructionconsulting from "./Constructionconsulting";

const App=()=>{

 
  return(
    <>
  
<Routes>
<Route   path="/" element={<Home/>} />
<Route  path="/about" element={<About/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/service" element={<Service/>} />
<Route  path="/brandstory" element={<Brandstory/>} />
<Route  path="/whypfm" element={<Whypfm/>} />

<Route  path="/pfmprojectcost" element={<PFMprojectcost/>} />
<Route  path="/stonefacadeproject" element={<StoneFacadeproject/>} />
<Route  path="/luxuryinteriorproject" element={<Luxuryinteriorproject/>} />
<Route  path="/landscapeproject" element={<LandscapeProject/>} />
<Route  path="/ourproject" element={<OurProject/>} />
<Route  path="/interiorfitout" element={<InteriorFitout/>} />
<Route  path="/onestopvilla" element={<OneStopVilla/>} />
<Route  path="/deliveryprocess" element={<DeliveryProcess/>} />
<Route  path="/constructionconsulting" element={<Constructionconsulting/>}/>
<Route  path="/video" element={<Video/>}/>
</Routes>

<Footer/>
    </>
  )
} 
export default App;
