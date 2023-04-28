import React from "react";
const WhyPfmcard=(props)=>{
    return(
        <>
            <div className="minicard">
 
 <div className="minicardheading"><h5>
   
 <img src={props.imgsrc} className="minicardimg"/>
 
 
 {props.heading}
 </h5>
 </div>
 <div className="minicardtext"><p>
 
 {props.text}
 </p>
 </div>
 
 </div>
        </>
    )
}
export default WhyPfmcard