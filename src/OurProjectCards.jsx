import React, { useState } from "react";
import Cards from "./Card";
import { Link } from "react-router-dom";
const OurProjectCards=(props)=>{
    const [showall, setShowDivALL] = useState(true);
    const [showresidentalvilla, setShowDivresidentalvilla] = useState(false);
    const onclickresidentalvilla=()=>{
       
                setShowDivresidentalvilla(true);
                setShowDivALL(false);

        
    }
    const onclickAll=()=>{
       
                setShowDivresidentalvilla(false);
                setShowDivALL(true);

        
    }
return(

<>
<div className="minilinktext text-center">
<h3 style={{lineHeight: "calc(1.5vw + 25px"}}>OUR PROJECT</h3>
<p style={{}}>Our services are from A to Z, from land planning to turn key project</p>
</div>
<div className="text-center">
    <Link className="minilinkitem  active" to="" onClick={onclickAll} >ALL</Link>
    <Link className="minilinkitem" to="" onClick={onclickresidentalvilla} >RESIDENTAL VILLA</Link>
    <Link className="minilinkitem">COMMERCIAL</Link>
    <Link className="minilinkitem">GOVERNMENT</Link>
</div>
{ showall && (<div>
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
{ showresidentalvilla && (<div>

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
export default OurProjectCards
