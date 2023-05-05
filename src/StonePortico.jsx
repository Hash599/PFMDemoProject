import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import { StonePorticoCardright } from "./StonePorticoCard";
import StonePorticoCardleft from "./StonePorticoCard";
const StonePortico=()=>{
    return(
        <>
<Navbar/>
<CommonImg imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567673.jpg?x-oss-process=image/format,webp"
text="STONE PORTICO SOLUTION" />
<div className="upgrade text-center">
    <h2>we upgrade places with suitable solution for you</h2>
    <p style={{fontSize:"18px",padding:"10px"}}>The portico is a prominent element in the architecture of ancient Rome and Greece. An elegant portico offers much grander proportions and will create immediate impact to the façade of your home. The porch is supported by natural stone columns which can be elaborate or plain in design. Our portico stoneworks are all handmade by our experienced workers and all of them have passed strict quality inspections to meet your requirements.</p>
    <p style={{fontSize:"18px",padding:"10px",margin:"20px"}}>
PFM team can create natural stone porticos bespoke to your specific requirements including CAD detailed drawings and 3D rendering. We can even provide or assist you to finish the portico installation.</p>
</div>
<StonePorticoCardleft imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567674.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567675.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE A"
/>
<StonePorticoCardright imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567676.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567677.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE B"
/>
<StonePorticoCardleft imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567674.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567675.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE C"
/>
<StonePorticoCardright imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567676.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567677.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE D"
/>
<StonePorticoCardleft imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567674.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567675.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE E"
/>
<StonePorticoCardright imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7567676.jpg?x-oss-process=image/format,webp"
    imgsrc1="https://icdn.tradew.com/file/201811/1573270/jpg/7567677.jpg?x-oss-process=image/format,webp"
    heading="PORTICO TYPE F"
/>

        </>
    )
}
export default StonePortico