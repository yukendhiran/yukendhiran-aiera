import React from 'react'
import { SectionWrapper } from '../hoc'
import Card from './card'
import { styles } from "../../styles";
function testimonial() {
  return (
    <>
    <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
    <div className='grid  mx-auto lg:grid-cols-2 space-x-2 space-y-16 items-center mr-20 justify-center'>
        <Card/>
        <Card/>
    </div>
       
    </>
  )
}

export default SectionWrapper(testimonial, 'testimonials');