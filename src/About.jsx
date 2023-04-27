import React from "react";
import Navbar from "./Navbar";
import Imagetext from "./Imagetext";
import Textimage from "./Textimage";
import Countries from "./Countries";
const About=()=>{
    return(
        <>
<Navbar/>
<div className="aboutimg">
    <img src="https://icdn.tradew.com/stylefile/20525/about-top.jpg?x-oss-process=image/format,webp"/>
<div className="aboutimgtext text-center">
ABOUT PFM | LUXURY VILLA SOLUTION
</div>
</div>
<div className="text-center belowimgtext">
<h1>
LUXURY VILLA SOLUTION Contractor

</h1>
</div>
<div className="row video">

    <div className="col-1"></div>
    <div className="col-7"><iframe width="840" height="495" src="https://www.youtube.com/embed/PoojIar7l2o" title="PFM Showroom and Factory - The largest Exhibiton Hall in Guangzhou" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    <div className="col">
        <h3>Royal palace for solution for several presidents world-widely</h3>
    
        <p style={{}}>PFM CO.,LTD. is an architectural contracting company in Guangzhou, China. Established in 2008."Ideas To Reality Builder" is our motto and guides our direction.</p>
  <p>We are a one-stop service, design and construction contracting solution provider. The Design/Build concept is fundamental to our business. We are able to work with material supply to your project or we can help to deepen your design before production.</p>
    <p>
    PFM is an independent company of designers, engineers,consultants and technical specialists. Together we help our clients solve their most complex challenges-turning exciting ideas into reality as we strive to find a better way and shape a better world.
    </p>
    </div>
    <div className="row centerinfo">

<div className="col text-center">
    <h1 className="text-center">14+</h1>
    <p>14+ years of experience</p>
</div>
<div className="col text-center">
    <h1>800M<sup>2</sup></h1>
    <p>Has a showroom of 800 square meters</p>
</div>
<div className="col text-center">
    <h1>116+</h1>
    <p>Cooperation with more than 116 countries</p>
</div>
<div className="col text-center">
    <h1>2000+</h1>
    <p>More than 2000 customers established</p>
</div>

    </div>

</div>
<Imagetext imgsrc="https://icdn.tradew.com/stylefile/20525/aboutThree-img01.jpg?x-oss-process=image/format,webp"

heading="Turnkey Villa Project Solutions"
text="PFM provides a complete turnkey solution for project, from designing, fabricating, shipping to installation, and from factory directly to your site.
We always care about customers and offer perfect solutions at each stage of the work, no matter it is small residential or luxury villa."
btn="View More"
/>
   <Textimage heading="Project Management"
    imgsrc="https://icdn.tradew.com/stylefile/20525/aboutThree-img02.jpg?x-oss-process=image/format,webp"
text="We will manage it completely from start to finish, to help you reduce technical risks, prevent construction errors, control budget and effectively keep your construction project within schedule."
btn="View More"
   />  
   <Imagetext imgsrc="https://icdn.tradew.com/stylefile/20525/aboutThree-img03.jpg?x-oss-process=image/format,webp"

heading="Technical Support"
text="From concept to completion, we have experienced civil engineers, architect, electricians to guide through the whole project. They do well in site control, including technical support, quality control, timelines and cost effectiveness"
btn="View More"
/> 


<Textimage heading="Building Materials and Furniture Integrator"
    imgsrc="https://icdn.tradew.com/stylefile/20525/aboutThree-img04.jpg?x-oss-process=image/format,webp"
text="PFM Focus on building materials and villa project solutions for 14+ years. We carry a full line of building materials and decorations. Including stone curtain wall materials, marble flooring materials, and interior decoration: doors and cabinets, curtain fabric, furniture, lamp fittings and so on"
btn="View More"
   />
      <Imagetext imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7434917.jpg?x-oss-process=image/format,webp"

heading="Logistics Coordination"
text="A good logistic is of vital importance for complex projects, Our logistics coordination team will assist you in making all orders for exactly what, where and how you require.

The packaging phase is key and requires specific care: every element is properly packed with maximum protection, to guarantee total safety during transports"
btn="View More"
/> 

<div className="text-center">
    <h1>PFM GLOBAL BUSINESS NETWORK</h1>
    <p>PFM has provided materials and services to 113 countries & regions since 2006. Our Dream is to realize more and more people' dream home and build beautiful future with you.</p>
</div>
<div className="row mapimg">
<div className="col"></div>
<div className="col">

    <img src="https://icdn.tradew.com/stylefile/20525/aboutFive-img.jpg?x-oss-process=image/format,webp"/>
</div>
<div className="col"></div>
</div>
<div className="row">
<div className="col-1"></div>
    <div className="col">

<Countries continent="Africa"
    name="Gabon"
    
    
/>
    </div>
</div>
        </>
    )
}
export default About