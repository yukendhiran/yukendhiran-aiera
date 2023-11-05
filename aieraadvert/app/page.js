"use client"
import Blob from "./component/blob/blob";
import Nav from "./component/nav/nav";
import Minifoot from "./component/footer/minifoot";

import { useScroll, motion, useTransform } from "framer-motion";

export default function Home() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  let scale = useTransform(scrollYProgress, [0, 1], ["100%", "90%"]);
  



  return (
    <div className="bg-black"> 

      <Nav/>
     <motion.div
      style={{y}} className="canvas-container">
        <Blob className="w-full h-full"></Blob>
      </motion.div>
     
       <div className="headline-container">
        <div id="text-behind">AIERA </div>
        <div id="text-behind-blur">AIERA </div>
        <div id="text-front">AIERA </div>
      </div>

      <Minifoot/>
     </div>
    
  );
}
