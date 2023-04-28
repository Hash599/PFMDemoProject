import React from "react";
const Minicards=(props)=>{
return(
    <>
<div className="minicard">
 
<a href="/"> 
<img src={props.imgsrc} className="minicardimg"/>
</a>
<div className="minicardheading"><h5>

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
export default Minicards;