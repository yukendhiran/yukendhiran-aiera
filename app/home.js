"use client"
import Blob from "./component/blob/blob";
import Nav from "./component/nav/nav";
import Minifoot from "./component/footer/minifoot";
import About from "./component/about/about";
import Work from "./component/work/work";
import Testimonial from "./component/testimonials/testimonial";
import Faq from "./component/FAQ/faq";
import Contact from "./component/Contact/contact";
import Stars from "./component/Contact/stars";
import { Suspense } from "react";
import Loading from "./component/Contact/loader";

import { useScroll, motion, useTransform } from "framer-motion";

export default function Page() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);
  



  return (
    <> 
    <Suspense fallback={<Loading />}>

    <Nav/>
    <motion.div
      style={{y}} className="canvas-container">
        <Blob className="w-full h-full"></Blob>
        <About/><div className="mb-12"/>
        <Work/><div className="mb-12"/>
        <Testimonial/><div className="mb-12"/>
        <Faq/><div className="mb-12"/>
        <Contact/>
        <div className="mb-12"/>
        <Stars/>

      </motion.div>
     
       <motion.div className="headline-container">
        <div id="text-behind">AIERA </div>
        <div id="text-behind-blur">AIERA </div>
        <div id="text-front">AIERA </div>
      </motion.div>

      <Minifoot/>
    </Suspense>

      
     </>
    
  );
}
