"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function CardFaq({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.5,
  };

  return (
    <motion.div
      className={`w-9/12  rounded-2xl p-3 my-auto  ${
        expanded ? ' bg-yellow-500 ' : 'bg-opacity-10 backdrop-blur-sm border border-gray-100 bg-clip-padding backdrop-filter'
      } mx-auto ${
        expanded ? 'h-auto' : 'h-12'
      }`}
     
    >
      <motion.div
        className={`h-auto sm:text-[15px] lg:text-[20px] font-bold ${
          expanded ? 'text-black' : 'text-yellow-500'
        }`}
        transition={transition}
        onClick={toggleExpand}
      >
        {question}
      </motion.div>
      {expanded && (
        <motion.div  variants={variants}
        initial='hidden'
        animate={expanded ? 'show' : 'hidden'}
        className="h-auto p-5 sm:text-[12px] lg:text-[17px] font-bold text-black">{answer}</motion.div>
      )}
    </motion.div>
  );
}

export default CardFaq;