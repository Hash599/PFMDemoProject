import React from "react";
const VideoCard=(props)=>{
    return(
    <>
        <div className="row">
        <h2 className="videoheading">{props.heading}</h2>
            <div className="col text-center">
            <iframe width="460" height="290" src={props.src1} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{props.title1}</p>
            </div>
            <div className="col text-center">
            <iframe width="460" height="290" src={props.src2} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{props.title2}</p>
            </div>
            <div className="col text-center">
            <iframe width="460" height="290" src={props.src3} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p>{props.title2}</p>
            </div>
        </div>
    </>
    )
}
export default VideoCard
