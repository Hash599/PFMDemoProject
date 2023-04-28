import React, { useState } from "react";
const Countries=(props)=>{
  
 return(
    <>
<h3>{props.continent}</h3>
<ul className="footerul" >
<li className="countryli">{props.countryname}</li>
<li className="countryli">{props.countryname1}</li>
<li className="countryli">{props.countryname2}</li>
<li className="countryli">{props.countryname3}</li>
<li className="countryli">{props.countryname4}</li>
<li className="countryli">{props.countryname5}</li>
<li className="countryli">{props.countryname6}</li>
<li className="countryli">{props.countryname7}</li>
<li className="countryli">{props.countryname8}</li>
<li className="countryli">{props.countryname9}</li>
<li className="countryli">{props.countryname10}</li>
<li className="countryli">{props.countryname11}</li>
<li className="countryli">{props.countryname12}</li>
<li className="countryli">{props.countryname13}</li>

</ul>

    </>
 )   
}
export default Countries