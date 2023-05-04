import React from "react";
import Navbar from "./Navbar";
import CommonImg from "./CommonImg";
import Imagetext from "./Imagetext";
import Textimage from "./Textimage";
import Form from "./Form";
import Cards from "./Card";
import Colomnsandpillasterimgleft from "./Colomnsandpilasterimg";
import { Colomnsandpillasterimgright } from "./Colomnsandpilasterimg";
const ColumnsandPilaster=()=>{
    return(
        <>
            <Navbar/>
            <CommonImg imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7579407.jpg?x-oss-process=image/format,webp"
                text="COLUMNS & PILASTER SOLUTION"

            />
<Colomnsandpillasterimgleft imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7563119.jpg?x-oss-process=image/format,webp"
    heading="COLUMNS"
    text="Columns not only have a good load-bearing function, but show an extraordinary decorative effect. Commonly used marble and limestone for interior and exterior. PFM can customize columns of different sizes and styles for you"

    miniheading="INSTALLATION DRAWING"
    miniimg="https://icdn.tradew.com/file/201811/1573270/jpg/7564560.jpg?x-oss-process=image/format,webp"
/>
<Colomnsandpillasterimgright imgsrc="https://icdn.tradew.com/file/201811/1573270/jpg/7564562.jpg?x-oss-process=image/format,webp"
    heading="PILASTER"
    text="Pilasters are usually mechanical or cement treatment, combined with beautiful reliefs, exquisite and high-end, both interior and exterior are very popular."
miniheading="INSTALLATION DRAWING"
miniimg="https://icdn.tradew.com/file/201811/1573270/jpg/7565265.jpg?x-oss-process=image/format,webp"

/>
        </>
    )
}
export default ColumnsandPilaster