import React, { useState } from "react";
import Cards from "./Card";
import { Link } from "react-router-dom";
const LuxuryDesignServiceCard=(props)=>{
    const [showlivingroom, setShowlivingroom] = useState(true);
    const [showmajlis, setShowmajlis] = useState(false);
    const onclickmajlis=()=>{
       
                setShowmajlis(true);
                setShowlivingroom(false);

        
    }
    const onclickLivingRoom=()=>{
       
                setShowmajlis(false);
                setShowlivingroom(true);

        
    }
return(

<>
<div className="minilinktext text-center">
<h3 style={{lineHeight: "calc(1.5vw + 25px"}}>CREATIVE SPACE INSPIRATION</h3>
<p style={{}}>We have cases for each function room. Below are some samples.</p>
</div>
<div className="text-center">
    <Link className="minilinkitem  active" to="" onClick={onclickLivingRoom} >LivingRoom</Link>
    <Link className="minilinkitem" to="" onClick={onclickmajlis} >MAJLIS</Link>
    <Link className="minilinkitem">DINNING</Link>
    <Link className="minilinkitem">BATHROOM</Link>
    <Link className="minilinkitem">KITCHEN</Link>
    <Link className="minilinkitem">BEDROOM</Link>
</div>
{ showlivingroom && (<div>
<div className="row">
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img01.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img02.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img03.jpg?x-oss-process=image/format,webp"/>
    </div>
</div>
<div className="row">
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img04.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img05.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img06.jpg?x-oss-process=image/format,webp"/>
    </div>
</div>
<div className="row">
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img07.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img08.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/stylefile/20525/workThree-img09.jpg?x-oss-process=image/format,webp"/>
    </div>
</div>
<div className="row">
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827826.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827820.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827827.jpg?x-oss-process=image/format,webp"/>
    </div>
</div>
</div>)}
{ showmajlis && (<div>

<div className="row">
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827826.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827820.jpg?x-oss-process=image/format,webp"/>
    </div>
    <div className="col">
        <Cards imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7827827.jpg?x-oss-process=image/format,webp"/>
    </div>
</div>
</div>)}

</>
)

}
export default LuxuryDesignServiceCard
