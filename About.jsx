import React from "react";
import Common from "./Common";
import img from "../src/images/about.png";

const About = () => {
    
    return (
    <>
   <Common name="let's know about us" 
   imgsrc={img} visit="/contact" 
   btname="Contact Now" />
     </>

    );

};
export default About;