import React from "react";
import { Link } from "react-router-dom";
const Imagetext=(props)=>{
    return(
        <>
<div className="row imgtxt">
    <div className="col-1"></div>
    <div className="col imgtxtimg">
        <img src={props.imgsrc} style={{width:"98%"}}/>
    </div>
    <div className="col imgtxtt">
        <h2> {props.heading}</h2>
        <p>{props.text}</p>
<Link to="" className="imgtxtbtn">{props.btn}</Link>
    </div>
</div>

        </>
    )
}
export default Imagetext