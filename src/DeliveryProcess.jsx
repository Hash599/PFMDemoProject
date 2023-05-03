import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Imagetext from "./Imagetext";
const DeliveryProcess=()=>{
    return(
        <>
            <Navbar/>
            <CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/Banner.jpg?x-oss-process=image/format,webp"
                text="HOW DOES PFM WORK WITH PALACES GLOBALY?"
                p="One-stop service process"
            />
            <Imagetext imgsrc="https://icdn.tradew.com/stylefile/20525/one-01.jpg?x-oss-process=image/quality,Q_90/format,webp"
                text="If you have already finished construction building and do not know what to do next, our PFM will definitely provide you one-stop solution and realize your dream house."
                heading="Project Delivery Process"
            />
            <ul  className="deliverylist" style={{listStyle:"none"}}>
<li>01. Architectural Drawing</li>
<li>02. Interior & Exterior 3D Design</li>
<li>03. Calculate Budget</li>
<li>04. Take As-built Measurement</li>
<li>05. Production & Installation Drawing</li>
<li>06. Production</li>
<li>07. Shipment Coordination</li>
<li>08. Installation on Site</li>

            </ul>
            <div className="deliveryImg">
                <img src="https://icdn.tradew.com/stylefile/20525/page01Two-img_01.jpg?x-oss-process=image/format,webp"/> 
                <img src="https://icdn.tradew.com/stylefile/20525/page01Two-img_02.jpg?x-oss-process=image/format,webp"/> 
                <img src="https://icdn.tradew.com/stylefile/20525/page01Two-img_03.jpg?x-oss-process=image/format,webp"/> 
                <img src="https://icdn.tradew.com/stylefile/20525/page01Two-img_04.jpg?x-oss-process=image/format,webp"/> 
            </div>
        </>
    )
}
export default DeliveryProcess