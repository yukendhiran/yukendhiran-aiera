import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import React from "react";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=' p-1 rounded-2xl shadow-card bg-gradient-to-br from-pink-500 to-green-500'
      >
        <div className='bg-gray-900 rounded-2xl py-5 px-12 min-h-[280px] flex flex-col items-center'>
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-2xl font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

  export default SectionWrapper(ServiceCard, "service");