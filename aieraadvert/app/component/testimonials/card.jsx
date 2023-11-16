import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../utils/motion";
import { SectionWrapper } from "../hoc";
import Image from 'next/image';

const ServiceCard = ({ index, title, icon }) => {
  const isSmallScreen = window.innerWidth <= 640;
  return (
    <Tilt className=''>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='relative'
      >
        <div className='lg:h-[300px] lg:w-[300px] rounded-2xl bg-white bg-opacity-10  backdrop-blur-sm border border-gray-100 sm:h-[200px] sm:w-[200px]'>
          <div className='lg:h-[120px] lg:w-[120px] lg:top-14 lg:left-[-10%] z-10 bg-white  bg-opacity-10 rounded-md  backdrop-blur-sm  absolute border border-gray-100 sm:h-[80px] sm:w-[80px] sm:top-8 sm:left-[-8%]'>
            <Image src="q.svg" width={200} height={200} alt="Description of the SVG" /> 
          </div>
          <div className='lg:h-[200px] lg:w-[400px] lg:top-48 lg:left-16 z-20 bg-gray-500  bg-opacity-10 rounded-md  backdrop-blur-sm absolute border border-gray-100 sm:h-[150px] sm:w-[200px] sm:top-32 sm:left-8'>
          <span className="sm:block sm:text-[12px] sm:text-white p-2 sm:text-center sm:font-bold lg:hidden"> Thanks to Aiera, my business successfully transitioned online. Their digital marketing expertise helped attract more customers and boost sales. Highly recommended! </span>  
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileHover={!isSmallScreen ? { opacity: 1, y: 0 } : {}}
            className='lg:h-[200px]  lg:w-[400px] lg:top-48 font-bold text-white text-[20px] text-center lg:left-16 p-7 z-20  bg-opacity-5 rounded-md  backdrop-blur-sm absolute border border-gray-100 sm:h-[150px] sm:w-[200px] sm:top-32 sm:left-8 sm:text-[16px] sm:p-5'
          >
            <span > Thanks to Aiera, my business successfully transitioned online. Their digital marketing expertise helped attract more customers and boost sales. Highly recommended! </span>            
          </motion.div>
          <div className='lg:h-[100px] lg:w-[200px] lg:left-32 lg:-top-5 z-20 bg-gray-500  bg-opacity-10 rounded-md  backdrop-blur-sm absolute border border-gray-100 sm:h-[50px] sm:w-[100px] sm:left-28 sm:-top-5'>
          <span className="sm:block sm:text-[14px] sm:text-white p-2 sm:text-center sm:font-bold lg:hidden" >Name </span> 
          
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileHover={!isSmallScreen ? { opacity: 1, y: 0 } : {}}
            className='lg:h-[100px]  lg:w-[200px] lg:left-32 lg:-top-5 font-bold text-white text-[20px] text-center  p-7 z-20  bg-opacity-5 rounded-md  backdrop-blur-sm absolute border border-gray-100 sm:h-[50px] sm:w-[100px] sm:left-28 sm:-top-5 sm:text-[16px] sm:p-5'
          >
            <span >Name </span>            
          </motion.div>
        </div>
      </motion.div>
    </Tilt>
  );
};


export default SectionWrapper(ServiceCard, "service");