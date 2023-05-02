import React from "react";
import Cards from "./Card";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import OurProjectCards from "./OurProjectCards";
const OurProject=()=>{
    return(
        <> 
        <Navbar/>
        <CommonImg 
            imgsrc="https://icdn.tradew.com/stylefile/20525/work-top.jpg?x-oss-process=image/format,webp"
            text="OUR WORKS"
            p="PFM has been providing materials and services to 113 countries & regions since 2006"
        />
        <div className="text-center"><h1>"Luxury isn’t simply defined by a high price, but is rooted in powerful design principles that guide the overall form and follow through to the smallest details."</h1>
        <p style={{fontSize:"20px",padding:"10px"}}>PFM is a team of specialists who are able to work with your home from interior design, engineering work and fit out. We take care of each small details to make your dreams come true.</p>
        </div>
        <div className="ProjectDeliveries  serviceheading text-center" >
        
        <div className="Deliveries">
        <h3>PROJECT DELIVERY PROCESS</h3>
            <p style={{fontSize:"18px"}}>If you have already finished construction building and do not know what to do next, our PFM will definitely provide you one-stop solution and realize your dream house.</p>
       <img  style={{width:"100%"}} src="https://icdn.tradew.com/file/201811/1573270/jpg/7717156.jpg?x-oss-process=image/format,webp"/>
        </div>
        </div>
        <OurProjectCards/>
        
        </>
    )
}
export default OurProject