import React from "react";
import CommonImg from "./CommonImg";
import Navbar from "./Navbar";
import Textimage from "./Textimage";
import Imagetext from "./Imagetext";
const InteriorFitout=()=>{
    return(
        <>
        <Navbar/>
            <CommonImg imgsrc="https://icdn.tradew.com/stylefile/20525/fit-top.jpg?x-oss-process=image/format,webp"
text="FIT OUT SERVICE"
p='Let us breath new life into your home'

 
            />
 <Imagetext
    imgsrc="https://icdn.tradew.com/stylefile/20525/fitOne-img.jpg?x-oss-process=image/format,webp"
    heading="Interior Fit-out"
    text="Fitting out of interiors - a service for the integrated purchase and production of all interior elements - furniture, decor, decoration materials, painting, vertical landscaping systems.

We are engaged in the implementation of well-designed and thought-out design projects. If you completely decide to entrust your premises to us, then we will be able to visualize your space with a panoramic view.

You can buy various types of building stone materials, wood flooring, decorative columns plaster, tiles, furnitures, lighting systems, electrical fittings, sound-proof and acoustic materials from PFM. Our experienced specialists will help you to choose the required collections. The production range is constantly updated, what allows us to offer only the best samples from world manufacturers. Representatives of our company will help to decorate any space properly, based on individual wishes."

btn="MORE OPTION"
 />
 <Textimage
    heading="Turnkey Interior Solutions"
    text="- Civil works

- MEP works

- Joinery

- Aluminum & Glazing works

- Fit Out

- Landscaping, Pools & Water Features:

Topographic survey,

Sketch landscape design,

Preparation of project drawings,

Design of drainage systems, design of watering,

Design of lighting,

Detailed flower garden plan,

Preparing of 3D visualization."
    imgsrc="https://icdn.tradew.com/stylefile/20525/fitTwo-img.jpg?x-oss-process=image/format,webp"
    btn="More Services"
 />
        </>
    )
}
export default InteriorFitout