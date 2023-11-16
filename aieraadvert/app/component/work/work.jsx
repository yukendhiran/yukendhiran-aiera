import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../../styles";

import { SectionWrapper } from "../hoc";

import { fadeIn, textVariant } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className=" bg-black w-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border rounded-2xl border-gray-700">
  <Tilt
     
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className=" p-5 rounded-2xl  w-full backdrop-filter backdrop-blur-lg bg-opacity-30"
  >
    <div className="relative  h-[230px]">
      <img
        src={image}
        alt="project_image"
        className="w-full h-full rounded-2xl"
        onClick={() => window.open(source_code_link, "_blank")}
      />

    </div>

    <div className="mt-5">
      <h3 className="text-white font-bold text-2xl">{name}</h3>
      <p className="mt-2 text-secondary text-base">{description}</p>
    </div>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <p
          key={`${name}-${tag.name}`}
          className={`text-base ${tag.color} bg-opacity-30 rounded-full p-1`}
        >
          #{tag.name}
        </p>
      ))}
    </div>
  </Tilt>
</motion.div>
  );
};

const Works = () => {

    const projects = [
        {
          name: "Work1",
          description:
            "detailed description of work 1", 
          tags: [
            {
              name: "tag",
              color: "blue-text-gradient",
            },
            {
              name: "tag",
              color: "green-text-gradient",
            },
            {
              name: "tag",
              color: "pink-text-gradient",
            },
          ],
          image: "" ,
          source_code_link: "https://github.com/",
        },
        {
          name: "Work 2",
          description:
            "detailed description of work 1", 
          tags: [
            {
              name: "tag",
              color: "blue-text-gradient",
            },
            {
              name: "tag",
              color: "green-text-gradient",
            },
            {
              name: "tag",
              color: "pink-text-gradient",
            },
          ],
          image: "" ,
          source_code_link: "https://github.com/",
        },
        {
          name: "Work 3",
          description:
            "detailed description of work 1", 
          tags: [
            {
              name: "tag",
              color: "blue-text-gradient",
            },
            {
              name: "tag",
              color: "green-text-gradient",
            },
            {
              name: "tag",
              color: "pink-text-gradient",
            },
          ],
          image: "" ,
          source_code_link: "https://github.com/",
        },
      ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Projects We Done.</p>
        <h2 className={`${styles.sectionHeadText}`}>Our Work.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          As a digital marketing company,
          we pride ourselves on delivering efficient and effective results. 
          Our portfolio showcases projects that demonstrate our expertise in driving tangible outcomes for clients. 
          We use data-driven strategies, transparent reporting, and continuous optimization to maximize ROI. 
          Let our track record of success speak for itself in showcasing the value we can bring to your organization.
        </motion.p>
      </div>

      <div className='grid mt-10 mr-10 mx-auto lg:grid-cols-3 gap-10 items-center justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");