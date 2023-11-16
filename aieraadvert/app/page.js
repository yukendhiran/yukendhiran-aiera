"use client"
import Blob from "./component/blob/blob";
import Nav from "./component/nav/nav";
import Minifoot from "./component/footer/minifoot";
import About from "./component/about/about";
import Work from "./component/work/work";
import Testimonial from "./component/testimonials/testimonial";
import Faq from "./component/FAQ/faq";

import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '80%']);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);
  



  return (
    <div className="bg-black"> 

      <Nav/>
     <motion.div
      style={{y}} className="canvas-container">
        <Blob className="w-full h-full"></Blob>
        <About/>
        <Work/>
       <Testimonial/>
       <Faq/>
      </motion.div>
     
       <motion.div className="headline-container">
        <div id="text-behind">AIERA </div>
        <div id="text-behind-blur">AIERA </div>
        <div id="text-front">AIERA </div>
      </motion.div>

      <Minifoot/>
     </div>
    
  );
}
