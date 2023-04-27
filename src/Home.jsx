import React from "react";
import Navbar from "./Navbar";
import Cards from "./Card";
import img1 from "./HomepgImg1.jpg"
import img2 from "./HomepgImg2.jpg"
import img3 from "./HomepgImg3.jpg"
import img4 from "./HomepgImg4.jpg"
import Minicards from "./Minicards";
import serviceimg1 from "./service-img01.png"
import serviceimg2 from "./service-img02.png"
import serviceimg3 from "./service-img03.png"
import serviceimg4 from "./service-img04.png"
import serviceimg5 from "./service-img05.png"
import serviceimg6 from "./service-img06.png"
import serviceimg7 from "./service-img07.png"
import serviceimg8 from "./service-img08.png"
import Form from "./Form";
import Crousel from "./Crousel";

const Home=()=>{
    return(
        <>
       

        <div className="slogan text-center">

<p>Luxury Villa Designer & Builder | China Best Luxury Villa Solution Contractor | Royal Palace For Solution For Several Presidents World-Widely</p>
        </div>
        <Navbar/>
        <Crousel/>
        <div className="container text-center bCrousel">
            <img src="https://icdn.tradew.com/file/201811/1573270/png/7625862.png?x-oss-process=image/format,webp"/>
            <p>
            PFM has been focusing on luxury palace projects for many years. We have professional interior design team and high-quality exterior & interior decoration material supply chain. From 3D rendering design to material supply, from installation drawing to site installation guidance. We will be your most responsible ideal dream builder!
            </p>
        </div>
        <div className="text-center ">
            <h1>Palace Design & Build Projects</h1>
            <span className="Bh">From Project Design to Actual Implementation | Royal palace for solution for several presidents world-widely</span>
        </div>
<div className="text-center links">
 <a className="linkelement">Exterior   |</a>

 <a className="linkelement">  Interior |</a>
 <a className="linkelement">  All |</a>
 <a className="linkelement">  Landscape  |</a>
 <a className="linkelement"> Our Project </a>
</div>
<div className="container ">
    <div className="row">
        <div className="col">
            <Cards imgsrc={img1}/>
        </div>
        <div className="col">
        <Cards imgsrc={img2}/>
        </div>
    </div>
</div>
<div className="container ">
    <div className="row">
        <div className="col">
            <Cards imgsrc={img3}/>
        </div>
        <div className="col">
        <Cards imgsrc={img4}/>
        </div>
    </div>
</div>
<div className="layout-service"></div>
<div className="text-center titleOne">
    <h1>One-Stop Palace Solution Service</h1>
    <p className="titleOnep">We are more than happy to offer you</p>
</div>
<p className="belowtitleone">PFM is specialized in providing luxury project solutions for Luxury Palaces, Villa, , Houses, Castle, Mansions world widely. Our goal is to help you build you dream palace. We'll walk you through every step of the process -from concept creation, to 3D rendering design, from interior and exterior decoration work,to installation drawing and section drawing as well as we have our installation team to travel to site to guide each step of the finishing work</p>
<div className="container ">
    <div className="row">
        <div className="col text-center">
            <Minicards  imgsrc={serviceimg1}
            heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        </div>
        <div className="col text-center">
        <Minicards imgsrc={serviceimg2}
heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        


        
        </div>
        <div className="col text-center">
        <Minicards imgsrc={serviceimg3}
heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        

      
        </div>
        <div className="col text-center">
        <Minicards  imgsrc={serviceimg4} className="minicardimg"
          heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        
        
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col text-center">
            <Minicards imgsrc={serviceimg5}heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        
        </div>
        <div className="col text-center">
        <Minicards imgsrc={serviceimg6}heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        
        </div>
        <div className="col text-center">
        <Minicards imgsrc={serviceimg7}
        heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        
        </div>
        <div className="col text-center">
        <Minicards  imgsrc={serviceimg8} heading="Design"
            text="PFM is engaged in the interior exterior design, and development drawing for detailed sections of decorative areas of palace, villa, house, castle, mansion world widely." />
        
        </div>
    </div>
</div>
   <div className="AboutCeo">
  <div className="ceoHeading"><h3>CEO & Founder</h3></div>
  <div className="ceoName"><h2>Susan Chan</h2></div>
  <div className="ceoText"><p>As a Chinese lady with a background of architectural design, Susan's pursuit of beauty is different from many other women. She is more in love with the beauty of natural materials like stone, wood, leather and etc, she has been exploring the art of combination of natural materials with spaces and buildings. She has a vision that PFM will work with creative designers, architects as well and insightful house owners to extend the talent of Chinese people in terms of creativity, wisdom, humanity, culture, to every corner of the world.</p></div>
<div>
  <a className="brandStoryBtn"> Brand Story</a>
  <a className="AboutPfm"> About PFM</a>
</div>
   </div>
   <div className="contact-head">
  <h1>Contact PFM | Luxury Palace Designer & Builder</h1>
  <p > Most families are making just one palace in their life time, and it is made for heritage from generation to generation to last, so quality and design matters. PFM is honored to build your home from concept to reality. We work with the best architects and interior designers and pay attention to each small detail to make your dreams come true.</p>
 </div>
 <Form/>
        </>

    )
  }
  export default Home
 