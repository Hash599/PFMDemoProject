import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Form from "./Form";
const StonePediments=()=>{
    return(
        <>
            <Navbar/>
            <CommonImg imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567691.jpg?x-oss-process=image/format,webp"
                text="STONE PEDIMENT SOLUTION"
                p=""
            />
            <div className="Perfect text-center">
                <h2 className=""> A Perfect House Starts With The Pediments Design</h2>
                <p style={{fontSize:"18px"}}>Pediments first appeared in Greek architecture, decorating the tops of doors and windows, which is one of the typical features of classical architecture. During the Renaissance and the subsequent Baroque and Rococo periods, new and more complex shapes were introduced and gradually began to combine with sculptural reliefs.

Triangular and segmented pediments are further varied by using different tops and bottoms.The options are: standard, receding, and broken.</p>
            
            <img src="https://icdn.tradew.com/file/201811/1573270/jpg/7579415.jpg?x-oss-process=image/format,webp"/>
            <p style={{fontSize:"18px"}}>The ratio of pediment’s height and width depends on its size. If it’s too high, it will visually give people a sense of oppression, while if it’s too small, it will show no obvious decorative effect. Therefore, as pediment become larger, the ratio should be decreased.
The size of the pediment is related to the number of columns. The following formula will be used to determine the appropriate height for a given width and number of columns:</p>
         <img src="https://icdn.tradew.com/file/201811/1573270/jpg/7567690.jpg?x-oss-process=image/format,webp"/>   
            </div>
<div className="Design text-center">
    <h2>Design Services</h2>
    <p style={{fontSize:"18px"}}>PFM team has very professional designers and installation workers. We are capable of customizing various natural stone pediments bespoke to your specific requirements, providing detailed CAD drawings, 3D renderings and installation effect drawings. If necessary, we will assist or provide on-site installation services for you.</p>
<img src="https://icdn.tradew.com/file/201811/1573270/jpg/7567689.jpg?x-oss-process=image/format,webp"/>

</div>
<div className="OurCases text-center">
    <h2>Our Cases</h2>
    <p style={{fontSize:"18px"}}>
    Since our establishment, PFM has participated in many engineering projects related to the pediments. In the cases, we are responsible for pediments’ design, stone selection and installation services.
    </p>
<img src="https://icdn.tradew.com/file/201811/1573270/jpg/7567686.jpg?x-oss-process=image/format,webp" style={{marginBottom:"20px"}}/>
</div>
<h2 className="text-center">
Contact PFM | Luxury Palace Designer & Builder
</h2>
<p className="text-center" style={{fontSize:"18px"}}>
Most families are making just one palace in their life time, and it is made for heritage from generation to generation to last, so quality and design matters. PFM is honored to build your home from concept to reality. We work with the best architects and interior designers and pay attention to each small detail to make your dreams come true.
</p>
     <Form/>   </>
    )
}
export default StonePediments