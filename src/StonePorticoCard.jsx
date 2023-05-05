import React from "react";
const StonePorticoCardleft=(props)=>{
    return(
        <>
    <div className="row" style={{marginBottom:"10px"}}>
  
<div className="col text-center">



<div className="" id={props.value}>
    <img src={props.imgsrc} alt=""/>

</div>
</div>
<div className="col">

<div className="text-center">
<span className="">{props.value}</span>
    <h2>{props.heading}</h2>
    <img src={props.imgsrc1} alt=""/>
</div>
</div>
    </div>        


            
        </>
    )
}
const StonePorticoCardright=(props)=>{
    return(
        <>
    <div className="row "style={{marginBottom:"10px"}}>
    
<div className="col text-center">

<div className="text-center">
<span className="">{props.value}</span>
    <h2>{props.heading}</h2>
    <img src={props.imgsrc} alt=""/>


</div>
</div>
<div className="col">


    
<div className="onevillaimg" id={props.value}>
    <img src={props.imgsrc1} alt=""/>
</div>
</div>
    </div>        


            
        </>
    )
}
export default StonePorticoCardleft
export  {StonePorticoCardright}