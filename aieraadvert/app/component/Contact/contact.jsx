import React from "react";
import { motion } from "framer-motion";


import { styles } from "../../styles";
import  EarthCanvas  from "./earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../../utils/motion";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the submitted data to the console
  };


  return (
      <>
       <h2 className={`${styles.sectionHeadText}`}>Our Work.</h2>
    <div
      className={`xl:mt-12 flex xl:flex-row  w-full flex-col-reverse gap-10 overflow-hidden`}
    > 
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-2xl w-9/12   item-center  bg-white bg-opacity-10  backdrop-blur-sm border border-gray-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-5">
              <label className="text-white text-2xl font-bold ">
                <span >Name</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Full name"
                {...register("fullName", { required: true })}
                className=" rounded-lg p-3 bg-white bg-opacity-10  backdrop-blur-sm border border-gray-100"
              />
            </div>
            <div className="flex flex-col space-y-5">
              <label className="text-white text-2xl font-bold ">
                <span >Phone</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Full name"
                {...register("fullName", { required: true })}
                className=" rounded-lg p-3 bg-white bg-opacity-10  backdrop-blur-sm border border-gray-100"
              />
            </div>
            <div className="flex flex-col space-y-5">
              <label className="text-white text-2xl font-bold ">
                <span >Email</span>
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Full name"
                {...register("fullName", { required: true })}
                className=" rounded-lg p-3 bg-white bg-opacity-10  backdrop-blur-sm border border-gray-100"
              />
            </div>

            <div className=" text-white text-2xl font-bold">
              <button type="submit" className=" bg-white bg-opacity-10 w-32 rounded-full h-10  backdrop-blur-sm border border-gray-100">
                submit
              </button>
            </div>
          </form>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto sm:mr-16 lg:mr-0 md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
      </>
  );
};

export default SectionWrapper(Contact, "contact");