import React, { useState } from "react";
const Countries=(props)=>{
 const[countryname,setcountryname]=useState(props.name)
  const setitem=()=>{
    return(
        
            setcountryname(props.name)
        
    )
  }  
 return(
    <>
<h3>{props.continent}</h3>
<ul className="footerul" onChange={setitem}>
<li className="countryli">{countryname}</li>

</ul>

    </>
 )   
}
export default Countries