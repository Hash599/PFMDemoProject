import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Cards from "./Card";
import Imagetext from "./Imagetext";
import Textimage from "./Textimage";
import Form from "./Form";
const LuxuryStairCase=()=>{
    return(
        <>
            <Navbar/>
            <CommonImg 
                imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569669.jpg?x-oss-process=image/format,webp"
                text="STAIRCASE SOLUTION"
                p="Solution provider of Luxury Staircase"
            />
            <p className="text-center" style={{margin:"10px",padding:"20px",fontSize:"20px"}}>Luxury stairs are an important part of private villas, magnificent apartments and splendid hotels. PFM uses the best natural stone and metal, and through clever design, manufacture and installation of stairs, it embodies true class, luxury and sophistication. All our stairs are built in accordance with strict and precise standards and customized to help you realize your luxury staircase dream.</p>
        <h2 className="text-center">DIFFERENT KINDS OF STAIRCASE STYLES FOR SELECTION</h2>
        
        <p  style={{margin:"10px",padding:"12px",fontSize:"20px"}}>We design, manufacture, and assemble staircases to the highest standards. Our product range includes standard stairs, for straight or curved applications, luxury stairs for high-end applications, as well as brass handrails, spindles, wrought iron and newel posts</p>
       <div className="row "style={{marginBottom:"50px"}}>
        <div className="col">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569658.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569659.jpg?x-oss-process=image/format,webp"/>

        </div>
        <div className="col">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569660.jpg?x-oss-process=image/format,webp"/>

        </div>
        <div className="col">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569661.jpg?x-oss-process=image/format,webp"

/>

        </div>
       </div>
<h2 className="text-center">LUXURY STAIRCASE HANDRAILS CUSTOMIZATION </h2>
<p style={{padding:"20px" , fontSize:"18px"}}>Beautiful and exquisite brass wrought iron and marble stair railings can fully demonstrate the charm of the stairs. Stair railing not only guarantees safety, but also a perfect embellishment for any staircase. We believe that every elegant staircase deserves customized handrails. PFM has a powerful supply chain system, making your stair railing a unique artwork</p>
<div className="row "style={{marginBottom:"50px"}}>
        <div className="col text-center">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569662.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
<Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569663.jpg?x-oss-process=image/format,webp"/>

        </div>
        </div>
        <div className="ourServices"> 
        
        <h2 className="text-center">OUR SERVICE</h2>
    <Imagetext imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569664.jpg?x-oss-process=image/format,webp"
        heading="MEASUREMENT"
        text="We believe that needs to be perfect and measuring is one of the most

important processes. We can offering measuring service or technical

assistance for concrete base stairs and standard freestanding stairs."
btn="DOWNLOAD MEASUREMENT FILE"

    />
    <Textimage imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569665.jpg?x-oss-process=image/format,webp"
        heading="DESIGNING THE STAIRS"
        text="Our service is personal and professional. We can design your staircase and handrail

for you using 3D CAD software, or we can craft a staircase using

architect drawings or your own"

    />
    <Imagetext imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569666.jpg?x-oss-process=image/format,webp"
        heading="
ASSEMBLING"
        text="We believe that needs to be perfect and measuring is one of the most

important processes. We can offering measuring service or technical

assistance for concrete base stairs and standard freestanding stairs."


    />
    <Textimage imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569668.jpg?x-oss-process=image/format,webp"
        heading="INSTALLATION"
        text="Our service is personal and professional. We can design your staircase and handrail

for you using 3D CAD software, or we can craft a staircase using

architect drawings or your own"
btn="INSTALLATION DOCUMENT"

    />
        </div>
     <div className="ourProject ">
        <h2 className="text-center">our project</h2>
        <p>This is one of our staircase projects. We supply one-stop solution for overall project, from 3D rendering design, materials selection and installation. Till now we have been providing building materials and exporting our products to 117 countries and regions since 2006.</p>
    <Imagetext imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7569668.jpg?x-oss-process=image/format,webp"
        text="This spiral staircase is part of office building project for Qatar government, which is applied in the middle of the lobby, the whole project also includes lobby flooring medallion, marble columns and wall panels. PFM designer team improved all the related interior design, engineer team was in site to do measurement and developed accurate auto-CAD drawing, and then sending 160 workers to the site to finished the installation as expected. As well, we earned a good reputation in quality and speed."
        btn="VIEW MORE"
    />
     </div>
     <h2 className="text-center">
Contact PFM | Luxury Palace Designer & Builder
</h2>
<p className="text-center" style={{fontSize:"18px"}}>
Most families are making just one palace in their life time, and it is made for heritage from generation to generation to last, so quality and design matters. PFM is honored to build your home from concept to reality. We work with the best architects and interior designers and pay attention to each small detail to make your dreams come true.
</p>
     <Form/> 
        </>

    )
}
export default LuxuryStairCase