import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Cards from "./Card";
const LandscapeProject=()=>{
return(
    <>
        <Navbar/>
        <CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/expert-top.jpg?x-oss-process=image/format,webp"
            text="GARDEN LANDSCAPE"
p="Love your outdoor space, Increase your homes value."
        />
              <div className="row">
<div className="col-2"> </div>
<div className="col">
    <h3 style={{fontFamily:"sans-serif"}} className="centertext">PFM as an expert in this field, they are worthy of your trust" A client sincerely praised us.</h3>
    <p style={{marginLeft:"15px",fontSize:"18px"}}>When you have an ideal villa, a perfect garden is undoubtedly the icing on the cake. However, turning imagination into reality is a long and difficult process, so it is important to find a partner offering you thoughtful services. “PFM as an expert in this field, They are worthy of your trust. ”A client sincerely praised us.</p>

</div>

<div className="col-2"> </div>
</div>
<div className="process">
    <div className="text-center" style={{fontSize:"28px"}}>OUR 5 STEP PROCESS</div>
    <div className="row processheading">
    
       

        <div className="col text-center"><h5 >1.ANALYSIS</h5></div>
        
        <div className="col text-center "><h5 >2.MEASURE</h5></div>
        <div className="col text-center"><h5 >3.CONCEPTUAL MEETING</h5></div>
        <div className="col text-center"><h5 >4.DESIGN</h5></div>
        <div className="col text-center"><h5 >5.CONSTRUCTION</h5></div>
       
    </div>
    <hr style={{height:"10px",color:"orangered",borderWidth:"4px"}}/>
    <div className="row ">
    
       

    <div className="col text-center"><p style={{padding:"10px"}}>After communication, we can match you a suitable designer who will provide free proposals on the basis of your consultation on outdoor projects.</p></div>
    
    <div className="col text-center "><p style={{padding:"10px"}}>According to your house measurement data, we are able to provide a solution to evaluate and reduce future potential issues</p></div>
    <div className="col text-center"><p style={{padding:"10px"}}>In the conceptual meeting, your designer will present a preliminary solution, you can choose different design styles, materials and make changes, finally confirm the solution</p></div>
    <div className="col text-center"><p style={{padding:"10px"}}>We'll first create a CAD site plan to go over with you and discuss more of your ideas and present pricing options. Then, we'll move forward with the full landscape and 3D design.</p></div>
    <div className="col text-center"><p style={{padding:"10px"}}>After sharing your ideas, we will create a CAD drawing design, providing pricing options and complete landscape 3D design. </p></div>
   
</div>
</div>
    <div className="service">
        <div className="serviceheading text-center"><h2>SERVICES</h2></div>
        <div className="servicetext text-center"><p>PFM does everything outdoors – from landscape design to swimming pools and spas, patios, driveways, outdoor kitchens, walkways, water features and more! Whether you're looking for a small addition to your front or back yard, or you have a blank slate that needs a full solution , let our experience and creativity work to create your dream outdoor space.</p></div>

        <div className="row">
        <div className="col-1"></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img01.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img02.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col-1"></div>
   </div> 
        <div className="row">
        <div className="col-1"></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img03.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img04.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col-1"></div>
   </div> 
        <div className="row">
        <div className="col-1"></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img05.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col"><Cards imgsrc="https://icdn.tradew.com/stylefile/20525/expertTwo-img06.jpg?x-oss-process=image/format,webp"/></div>
        <div className="col-1"></div>
   </div> 
   </div>
    
    </>
)
}
export default LandscapeProject