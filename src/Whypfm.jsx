import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import WhyPfmcard from "./WhyPfmcard";
import { Link } from "react-router-dom";
const Whypfm=()=>{
    return(
        <>
        <Navbar/>
        <CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/projecttop.jpg?x-oss-process=image/format,webp"
text="Villa Project builder contractor"
p="By Now, PFM has provided products and service to 117 countries.
Royal Palace For Solution For Several Presidents World-Widely."

        />
<div className="row minicardspfm">
    <div className="col ">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
    <div className="col">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
    <div className="col">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
</div>
<div className="row">
    <div className="col">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
    <div className="col">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
    <div className="col">
    <WhyPfmcard imgsrc="https://icdn.tradew.com/stylefile/20525/projectOne-img01.png?x-oss-process=image/format,webp"
    heading="A Complete Solution"
    text="We’ll walk you through every step of the villa construction process - from the conceptual design and fabrication, to the moment you open the front door with your key."
/>        

    </div>
</div>
<div className="wpfmbg">
<h3 className="text-center" style={{color:"#fff",lineHeight:"45px"}}>FEATURED HOUSE , PALACE , VILLA , CASTLE , MANOR PROJECT</h3>
<img  className="whypfmimg" src="https://icdn.tradew.com/file/201811/1573270/jpg/7577704.jpg?x-oss-process=image/format,webp"/>
</div>
<div className="textPFMPROJECT">
    <span style={{color:"#FFF"}}>PFM Project</span>
    <h2>We want to keep you updated with our on going and future projects.</h2>
    <Link className="whypfmbtn" to="">View Our Project</Link>
</div>

        </>
    )
}
export default Whypfm