import React from "react";
const OneStopVillaCardleft=(props)=>{
    return(
        <>
    <div className="row" style={{marginBottom:"10px"}}>
    <div className="col-1"></div>
<div className="col">



<div className="onevillaimg" id={props.value}>
    <img src={props.imgsrc} alt=""/>

</div>
</div>
<div className="col">

<div className="onevillatext">
<span className="left">{props.value}</span>
    <h2>{props.heading}</h2>
    <p>{props.text}</p>
</div>
</div>
    </div>        


            
        </>
    )
}
const OneStopVillaCardright=(props)=>{
    return(
        <>
    <div className="row "style={{marginBottom:"10px"}}>
    <div className="col-1"></div>
<div className="col">

<div className="onevillatext">
<span className="right">{props.value}</span>
    <h2>{props.heading}</h2>
    <p>{props.text}</p>


</div>
</div>
<div className="col">


    
<div className="onevillaimg" id={props.value}>
    <img src={props.imgsrc} alt=""/>
</div>
</div>
    </div>        


            
        </>
    )
}
export default OneStopVillaCardleft
export  {OneStopVillaCardright}