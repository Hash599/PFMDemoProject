import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import { Link } from "react-router-dom";
import Minicards from "./Minicards";
const Brandstory=()=>{
    
    return(
        <>
            <Navbar/>
            <CommonImg  imgsrc="https://icdn.tradew.com/stylefile/20525/brand-top.jpg?x-oss-process=image/format,webp"
                text="Brand Story"
            />
            <div className="row story">
            <div className="col-1"> </div>
            <div className="col-3">
            <h1>WE BUILD YOUR DREAM</h1> </div>
            <div className="col"> 
            <p style={{fontSize:20,textAlign:"justify"}}>As a Chinese lady with a background of architectural design, Susan's pursuit of beauty is different from many other women. She is more in love with the beauty of natural materials like stone, wood, leather and etc, she has been exploring the art of combination of natural materials with spaces and buildings. She has a vision that PFM will work with creative designers, architects as well and insightful house owners to extend the talent of Chinese people in terms of creativity,wisdom, humanity, culture, to every corner of the world.</p>
            <div className="col">
   
       <Link className="brandstorybtn">View More</Link>
       </div>
            </div>
            </div>
            <div className="brandstoryvideo text-center">
            <iframe width="1000" height="563" src="https://www.youtube.com/embed/oMeCDdQxAOs" title="PFM One-stop Solution Provider for Palace Projects From Design To Installation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="row bsimgtxt">
<div className="col  text-center">
<img  className="bsimg" src="https://icdn.tradew.com/stylefile/20525/brandTwo-img.jpg?x-oss-process=image/format,webp"/>


</div>

<div className="col">
<div className="bstext">
<h2>About Susan Story</h2>
<h3 style={{color:"orangered"}}>Susan Chan, the founder of the PFM company.</h3>
<p className="bstextp">
She came from a humble family from North China.</p>
<p className="bstextp">She grew up without shoes but not without ambition and vision.</p>
<p className="bstextp">She graduated from architecture university with a degree in civil engineering.</p>
<p className="bstextp">After working for several companies at age 26 she began her own company.</p>
<p className="bstextp">Global travel to over 30 countries has given her exposure to many cultures and an inspiration an vision to build a special company.</p>
<p className="bstextp">She is passionate, loving, giving, enthusiastic, modest,and powerful.</p>
<p className="bstextp">She has a goal to create the world most beautiful buildings with the most exquisite materials.</p>
<h4 style={{color:"#333",borderBottom:"2px solid #666", display:"inline-block",fontWeight:"300",fontSize:30}}>Its her dream to beautify the world.</h4>

</div>


</div>

            </div>
            <div className="row">
<div className="col text-center">
<Minicards imgsrc="https://icdn.tradew.com/stylefile/20525/brandThree-img01.png?x-oss-process=image/format,webp" 
    heading="Excellent Project Management"
    text="PFM makes good control of design, schedule, budget and all processes of whole project. Our professional team brings our expertise into your project, ensuring that your expectations are understood and fulfilled."
/>
    
</div>
<div className="col text-center">
<Minicards imgsrc="https://icdn.tradew.com/stylefile/20525/brandThree-img02.png?x-oss-process=image/format,webp" 
    heading="Full Cycle Solution of House Decoration"
    text="From interior design drawings to shop drawing, producing, inspections, shipping, and installation, our team can take care of them all."
/>

</div>
<div className="col text-center">
<Minicards imgsrc="https://icdn.tradew.com/stylefile/20525/brandThree-img03.png?x-oss-process=image/format,webp" 
    heading="High-end Bespoke Interiors"
    text="You will have access to an array of various styles and designs, and even some latest furnishings. Work with our team to transform your imagination into reality, or perhaps create a masterpiece you have not yet imagined! "
/>

</div>

            </div>
        </>
    )
}
export default Brandstory