import React from "react";
import Navbar from "./Navbar";
import Cards from "./Card";
import Textimage from "./Textimage";
import Imagetext from "./Imagetext";
import CommonImg from "./CommonImg";
import { Card } from "react-bootstrap";
const BalustradeParapetsolution=()=>{
    return(
        <>
          <Navbar/>  
          <CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/balustartop-img.jpg?x-oss-process=image/format,webp"
            text="BALUSTRADE &
PARAPET SOLUTION" />
<Imagetext imgsrc="https://icdn.tradew.com/stylefile/20525/balustarOne-img01.jpg?x-oss-process=image/format,webp"
    heading="STONE BALUSTRADE"
    text="The balustrade not only has the function of safety protection and separation, but also has strong decorative effect. Stairs, fences, gardens, and landscapes are all indispensable for it. This extraordinary decoration combines with the surrounding environment giving people a different visual experience. PFM can customize balustrade of different sizes and stone materials for you to embellish your life"
/>
<div className="row">
   <div className="col-4"> 
<Cards imgsrc="https://icdn.tradew.com/stylefile/20525/balustarOne-img02_01.jpg?x-oss-process=image/format,webp"
    
/>
   </div> 
   <div className="col">

<Cards imgsrc="https://icdn.tradew.com/stylefile/20525/balustarOne-img02_02.jpg?x-oss-process=image/format,webp"

/>
   </div>
   <div className="col text-center">

<Cards imgsrc="https://icdn.tradew.com/stylefile/20525/balustarOne-img02_03.jpg?x-oss-process=image/format,webp"

/>
   </div>
</div>
        </>
    )
}
export default BalustradeParapetsolution