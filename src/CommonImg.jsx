import React from "react";
const CommonImg=(props)=>{
    return(
        <>
            <div className="aboutimg">
    <img src={props.imgsrc}/>
<div className="aboutimgtext text-center">
{props.text}

<span style={{fontSize:"20px",lineHeight:"40px"}}>
<br/>
{props.p}
</span>
</div>
</div>


        </>
    )
}
export default CommonImg