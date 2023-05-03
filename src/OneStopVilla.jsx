import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import { Link } from "react-router-dom";
import OneStopVillaCardleft, { OneStopVillaCardright } from "./OneStopVillaCard"
const OneStopVilla=()=>{
    return(
        <>
<Navbar/>
<CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/service-top.jpg?x-oss-process=image/format,webp"
    text='TURNKEY PROJECT SERVICE'
    p="We do It completely from idea to reality"
/>
<div className="row">
<div className="col imgs">
    
    <img className="img1" src="https://icdn.tradew.com/stylefile/20525/serOne-img01.jpg?x-oss-process=image/format,webp"/>
    <img className="img2" src="https://icdn.tradew.com/stylefile/20525/serOne-img02.jpg?x-oss-process=image/format,webp"/>
</div>
<div className="col">
    <span style={{fontSize: "24px",
    color: "#888",
    lineHeight: "30px"
    ,display: "block"}}>We Provide</span>
    <h2 style={{    fontSize: "48px",
    color: "#333",
    lineHeight: "50px",
    fontWeight: "900",
    display: "block"}}>Turn-Key Solutions</h2>
<p style={{fontSize: "16px",

    color: "#666",
    lineHeight: "35px"}}>
PFM specilaizes in completely turnkey solutions for luxury villa , palace, house, residential project, We have professional designers，architects and resources to help you from concept design to perfect implementation,  while delivering on time and on budget
</p>
<p style={{marginBottom:"50px",fontSize: "16px",

    color: "#666",
    lineHeight: "35px"}}>
We perform construction and renovation works of any complexity with our experience and knowledge. We always care about customers and offer perfect solutions at each stage of the work, no matter it is small residential or luxury villa.
</p>
<Link className="gridbtn" to="/ourproject"> Our Project</Link>
<Link className="gridbtn" to="/brandstory"> Brand Story</Link>
</div>

</div>
<ul className="tabs">
    <li><Link to="#01" >01. Project Study</Link></li>
    <li><Link to="#02">02. Site Analysis</Link></li>
    <li><Link to="#03">03. Project Planning</Link></li>
    <li><Link>04. Preliminary Design</Link></li>
    <li><Link>05. Civil Work</Link></li>
    <li><Link>06. MEP Work</Link></li>
    <li><Link>07. Windows and Doors</Link></li>
    <li><Link>08. Stone Facade</Link></li>
    <li><Link>09. Gypsum & Plastering Work</Link></li>
    <li><Link>10. Tiling </Link></li>
    <li><Link>11. Ceiling Work</Link></li>
    <li><Link>12. Painting</Link></li>
    <li><Link>13. Joinery Work</Link></li>
    <li><Link>14. Interior Wall Finishing</Link></li>
    <li><Link>15. Switch Socket Installation</Link></li>
    <li><Link>16. Illumination Lights Installation</Link></li>
    <li><Link>17. Installation Of Curtain Roads</Link></li>
    <li><Link>18. Grand Cleaning</Link></li>
    <li><Link>19. Furnitures and Chandeliers</Link></li>
    <li><Link>20. Landscape Construction</Link></li>
</ul>
<OneStopVillaCardleft imgsrc="https://icdn.tradew.com/stylefile/20525/serTwo-img01.jpg?x-oss-process=image/format,webp"
heading="Project Study"
value="01"
text="Qualified project study by our company will determine whether the project is going to succeed. It is typically conducted before any steps are taken to move forward with a project, including planning."

/>
<OneStopVillaCardright imgsrc="https://icdn.tradew.com/stylefile/20525/serTwo-img02.jpg?x-oss-process=image/format,webp"
heading="Site Analysis"
value="02"
text="Qualified project study by our company will determine whether the project is going to succeed. It is typically conducted before any steps are taken to move forward with a project, including planning."

/>
<OneStopVillaCardleft imgsrc="https://icdn.tradew.com/stylefile/20525/serTwo-img03.jpg?x-oss-process=image/format,webp"
heading="Project Planning"
value="03"
text="Qualified project study by our company will determine whether the project is going to succeed. It is typically conducted before any steps are taken to move forward with a project, including planning."

/>
<OneStopVillaCardright imgsrc="https://icdn.tradew.com/stylefile/20525/serTwo-img04.jpg?x-oss-process=image/format,webp"
heading="Preliminary Design"
value="04"
text="Qualified project study by our company will determine whether the project is going to succeed. It is typically conducted before any steps are taken to move forward with a project, including planning."

/>
<OneStopVillaCardleft imgsrc="https://icdn.tradew.com/stylefile/20525/serTwo-img05.jpg?x-oss-process=image/format,webp"
heading="Civil Work"
value="04"
text="Qualified project study by our company will determine whether the project is going to succeed. It is typically conducted before any steps are taken to move forward with a project, including planning."

/>
<div className="lastonevillastop">
    <div className="row">
        <div className="col text-center" >
   <p style={{    fontSize: "35px"
  
  , lineHeight: "40px"}}>Let's talk about your project</p>

        </div>
        <div className="col text-center">
            <Link className="lastbtn" to="/contact">GET STARTED TODAY
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
</svg></Link>
        </div>
    </div>
</div>

        </>
    )
}
export default OneStopVilla 