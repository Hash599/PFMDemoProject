import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
const Footer=()=>{
    return(
        <>
<div className="row footer ">
<div className="col footer_item">
<span className="footerNavigation">Navigation</span>
<div className="footerNavlink">
<ul className="footerul">
 <Link to="/"><li className="footerli">Home</li></Link>
 <Link><li className="footerli">About</li></Link>
 <Link><li className="footerli">Project</li></Link>
 <Link><li className="footerli">Service Capability</li></Link>
 <Link><li className="footerli">Supply Products</li></Link>
 <Link><li className="footerli">Engineering Capability</li></Link>
 <Link><li className="footerli">Support</li></Link>
 <Link><li className="footerli">Video</li></Link>
 
</ul>

</div>
</div>
<div className="col footer_item ">
<span className="footerNavigation">
SUPPLY

</span>
<div className="footerNavlink">
<ul className="footerul">
 <Link to="/"><li className="footerli">Facade Stonework</li></Link>
 <Link><li className="footerli">Natural Stonework</li></Link>
 <Link><li className="footerli">Interior Wall Panel</li></Link>
 <Link><li className="footerli">Bathroom Element </li></Link>
 <Link><li className="footerli">Kitchen Element </li></Link>
 <Link><li className="footerli">Aluminium windows & doors</li></Link>
 <Link><li className="footerli">Furniture</li></Link>
 
 
</ul>

</div>
</div>
<div className="col footer_item">
<span className="footerNavigation">
PROJECT
</span>
<div className="footerNavlink">
<ul className="footerul">
 <Link to="/"><li className="footerli">Why PFM</li></Link>
 <Link><li className="footerli">Our Project</li></Link>
 <Link><li className="footerli">Stone Facade Project</li></Link>
 <Link><li className="footerli">Luxury Interior Project</li></Link>
 <Link><li className="footerli">Landscape Project</li></Link>
 
 
</ul>

</div>

</div>
<div className="col footer_item">
<span className="footerNavigation">
Service
</span>
<div className="footerNavlink">
<ul className="footerul">
 <Link to="/"><li className="footerli">Turkey Service</li></Link>
 <Link><li className="footerli">Interior Fit Out</li></Link>
 <Link><li className="footerli">villa Renovation</li></Link>
 <Link><li className="footerli">Contruction Consulting</li></Link>
 <Link><li className="footerli">Smart Home</li></Link>
 
 
</ul>

</div>
</div>
<div className="col footer_item">
<span className="footerNavigation">
Contact us
</span>
<span className="row">

 <div className="col">
 Tel:
86-13434304906
 </div>   
Email:
manager@pfmbuild.com
Address:
Room301, Mingrun Plaza, Huangbian North Rd Baiyun District, Guangzhou, China
<div className="col">

 （GPS | 23°13'20.0"N 113°17'24.1"E）
</div>
</span>
</div>



</div>
        </>
    )
}
export default Footer