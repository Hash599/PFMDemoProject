import React from "react";
import { Link } from "react-router-dom";
const Textimage=(props)=>{
    return(
        <>
<div className="row imgtxt ">
   
    <div className="col imgtxtt text-center">
    <h2> {props.heading}</h2>
        <p>{props.text}</p>
<Link to="" className="imgtxtbtn">{props.btn}</Link>
   
    </div>
    <div className="col imgtxtimg text-center">
    <img src={props.imgsrc} style={{width:"100%"}}/>
         </div>
</div>

        </>
    )
}
export default Textimage