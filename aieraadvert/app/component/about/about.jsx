import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter'
import { styles } from "../../styles";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' p-1 rounded-2xl shadow-card bg-gradient-to-br from-pink-500 to-green-500 '
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

const About = () => {
  const services = [
    {
      title: "Web Developement",
    },
    {
      title: "Digital Marketing",
    },
    {
      title: "SEO Optimization",
    },
    {
      title: "Content Creation",
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>We do {" "}
         <span style={{ color: 'yellow', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Web Developement', 'Digital Marketing', 'SEO Optimization', 'Content Creation']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
          </span>
          </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to our digital marketing company. 
        We are experts in driving online success for 
        businesses through customized strategies.
        From SEO and social media to website optimization, 
        we deliver measurable results. 
        Let us help you achieve your digital marketing goals. 
        Contact us now to get started.
      </motion.p>

      <div className='grid mt-10 mr-10  mx-auto lg:grid-cols-4 gap-10 items-center justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");