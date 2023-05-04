import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Cards from "./Card";
import Imagetext from "./Imagetext";
import Textimage from "./Textimage";
import LuxuryDesignServiceCard from "./LuxuryDesignServiceCard";
import Form from "./Form";
const LuxuryDesignService=()=>{
return(
    <>
        <Navbar/>
        <CommonImg imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7759634.jpg?x-oss-process=image/format,webp"
            text="DESIGN SERVICE"
            p="Help You Create a Home Fitted to Your Lifestyle"
        />
<Textimage
    imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760398.jpg?x-oss-process=image/format,webp"
    heading="Architectural Plan Drawing"
    text="We can help to make land plan and garden plan based on your idea about function request and ratio rate. We can also make architectural drawing, architectural equipment drawing and structure drawing, with what you can finish the civil work."
/>
<Imagetext imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760399.jpg?x-oss-process=image/format,webp"
    heading="Furniture Plan"
    text="We can make furniture layout and provide proposal based on ach space design style and your taste. We provide one stop solution of customized service."
btn="View More"

/>
<div className="Rendering">
    <h2 className="text-center">3D Rendering Design</h2>
    <p className="text-center">3d renderings is a way to see your future house in real and it is a general control of color, lighting, material, style, space, and material budget. We are able to provide different angles of pictures of important areas, which can match your request</p>
</div>
<div className="renderingvideo text-center">
<iframe width="1000" height="563" src="https://www.youtube.com/embed/JFsHpqBuMq0" title="PFM 3D Rendering Design" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
    <div className="ourProject">
        <h2 className="text-center ourProjectHeading">Our Project</h2>
        <p className="text-center">We have design team of more than 20 members, who can satisfy differet clients worldwild of different design styles .</p>
    </div>
    <div className="row">
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760456.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760457.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760458.jpg?x-oss-process=image/format,webp"/>
        </div>
    </div>
    <div className="row">
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760459.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760460.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760461.jpg?x-oss-process=image/format,webp"/>
        </div>
    </div>
    <div className="row">
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760462.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760463.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760464.jpg?x-oss-process=image/format,webp"/>
        </div>
    </div>
    <div className="DESIGNSTYLESELECTION">
        <h2 className="text-center ourProjectHeading">DESIGN STYLE SELECTION</h2>
        <p className="text-center">PFM can provide diffrent design style cases for your choosing and can customize based on your personal request. The most suitable one is the best one.</p>
    </div>
    <div className="row">
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760451.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760452.jpg?x-oss-process=image/format,webp"/>
        </div>
       
    </div>
    <div className="row">
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760453.jpg?x-oss-process=image/format,webp"/>
        </div>
        <div className="col text-center">
            <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7760454.jpg?x-oss-process=image/format,webp"/>
        </div>
        
    </div>
    <LuxuryDesignServiceCard/>
    
    <div className="col text-center">
        <h2 className="">
        <span style={{color:"orangered",margin:"10px"}}>Get</span> In Touch - Build your Villa | Royal Palace For Solution For Several Presidents World-Widely
        </h2>
        <p >
        PFM team with over 10 year experiences, specializing in design, fabrication and installation of any type of stone for commercial and residential. Warmly welcome project purchasing manager, individual home owners & designers, and whole sellers, ects. write us your requirement.
        </p>
    <Form/>
    </div>
    </>
)

}
export default LuxuryDesignService