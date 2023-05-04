import React from "react";
const Colomnsandpillasterimgleft=(props)=>{
    return(
        <>
            <div className="row imgtxt ">
   
   <div className="col " style={{margin:"20px"}}>
   <h2> {props.heading}</h2>
       <p>{props.text}</p>
       <h5>{props.miniheading}</h5>
<img src={props.miniimg}/>
  
   </div>
   <div className="col " style={{margin:"20px"}}>
   <img src={props.imgsrc} style={{width:"100%"}}/>
        </div>
</div>
        </>
    )

}
const Colomnsandpillasterimgright=(props)=>{
    return(
        <>
<div className="row imgtxt ">
   
<div className="col imgtxtt " style={{margin:"20px"}}>
  
<img src={props.imgsrc} style={{width:"100%",margin:"20px"}}/> 
   </div>
   <div className="col">
   <h2> {props.heading}</h2>
       <p>{props.text}</p>
       <h5>{props.miniheading}</h5>
<img src={props.miniimg}/>
  
        </div>
</div>

        </>
    )
}
export default Colomnsandpillasterimgleft
export { Colomnsandpillasterimgright}