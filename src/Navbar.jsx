import React, { useState,useEffect } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";


const Navbar=()=>{

  
  
  
    const [navbarColor, setNavbarColor] = useState('#333'); // default color
    const [navbaritemColor, setNavbaritemColor] = useState('#F9F6EE'); // default color
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setNavbarColor('#fff');
        setNavbaritemColor('#333') // change color on scroll
      } else {
        setNavbarColor('#333'); // revert to default color
      setNavbaritemColor(	'#F9F6EE')
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  
    

    return(
<>
<div className="container-fluid nav_bg">
<div className="row">
    <div className="col-10 mx-auto">

    

<nav className="navbar navbar-expand-lg  sticky-top " style={{backgroundColor:navbarColor}}   >
  <div className="container-fluid">
    <NavLink 
    className="navbar-brand" to="/"><img src="https://icdn.tradew.com/file/201811/1573270/png/7614219.png?x-oss-process=image/resize,m_fill,h_80,w_200/format,webp"/>
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  mt-2 mt-lg-0">
        <li className="nav-item" >
          <NavLink activeClassName="active" className="nav-link" aria-current="page" to="/" style={{color:navbaritemColor}}>Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName='active' className="nav-link"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color:navbaritemColor}}>About</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><NavLink className="dropdown-item" to="/about">About PFM</NavLink></li>
            <li><NavLink className="dropdown-item" to="/brandstory">Brand Story</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/whypfm">Why PFM</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName='active' className="nav-link"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color:navbaritemColor}}>Project</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><NavLink className="dropdown-item" to="/whypfm"> Why PFM</NavLink></li>
            <li><NavLink className="dropdown-item" to="/pfmprojectcost">PFM Project Cost</NavLink></li>
            <li><NavLink className="dropdown-item" to="/ourproject">Our Project</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/stonefacadeproject">Stone Facade Project</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxuryinteriorproject">Luxury Interior Project</NavLink></li>
            <li><NavLink className="dropdown-item" to="/landscapeproject">Landscape Project</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName='active' className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{color:navbaritemColor}}>Service Capability</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><NavLink className="dropdown-item" to="/onestopvilla"> One-Stop Villa Solution</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxurydesignservice">Luxury Design Service</NavLink></li>
            <li><NavLink className="dropdown-item" to="/deliveryprocess">Delivery Process</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/interiorfitout">Interior Fit Out</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxuryinteriorproject">Villa Renovation</NavLink></li>
            <li><NavLink className="dropdown-item" to="/constructionconsulting">Construction Consulting</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName='active' className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"   style={{color:navbaritemColor}}>Supply Products</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
          <li><NavLink className="dropdown-item" to="/onestopvilla"> One-Stop Villa Solution</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxurydesignservice">Luxury Design Service</NavLink></li>
            <li><NavLink className="dropdown-item" to="/deliveryprocess">Delivery Process</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/interiorfitout">Interior Fit Out</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxuryinteriorproject">Villa Renovation</NavLink></li>
            <li><NavLink className="dropdown-item" to="/constructionconsulting">Construction Consulting</NavLink></li>
       </ul>
        </li>
        <li className="nav-item dropdown">
          <NavLink activeClassName='active' className="nav-link" to="/contact" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"   style={{color:navbaritemColor}}>Engineering Capability</NavLink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
          <li><NavLink className="dropdown-item" to="/stonefacadesolution"> Stone Facade Solution</NavLink></li>
            <li><NavLink className="dropdown-item" to="/columnandpilaster">Columns & Pilaster</NavLink></li>
            <li><NavLink className="dropdown-item" to="/stonepediments">Stone Pediment</NavLink></li>
            
            <li><NavLink className="dropdown-item" to="/stoneportico">Stone Portico</NavLink></li>
            <li><NavLink className="dropdown-item" to="/balustradeparapetsolution">Balustrade & Parapet Solution</NavLink></li>
            <li><NavLink className="dropdown-item" to="/luxurystaircase">Luxury Staircase Solution</NavLink></li>
       </ul>
        
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" to="/contact"  style={{color:navbaritemColor}}>Support</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" to="/video"  style={{color:navbaritemColor}}>Video</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName='active' className="nav-link" to="/contact"  style={{color:navbaritemColor}}>Contact</NavLink>
        </li>
     </ul>
    
    </div>
  </div>
</nav>
</div>
</div>

</div>
</>

    )
}
export default Navbar;