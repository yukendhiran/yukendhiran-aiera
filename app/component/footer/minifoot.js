"use client"
import React, { useState } from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
function minifoot() {
  const [expanded, setExpanded] = useState(false);
   

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <>
        <div className='fixed  lg:hidden bottom-4 right-4 z-10'>
            <button
              className='bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-bold py-2 px-4 rounded-full shadow'
              onClick={toggleExpanded}
            >
              Contact
            </button>
          </div>

          {expanded && (
            <div className='fixed bottom-16 right-4 z-10 bg-white  bg-opacity-10 rounded-md  backdrop-blur-sm  absolute border py-2 px-4 rounded-lg shadow'>
              <div className='mb-2'>
                <Link href='mailto:info@aieraadvert.com' className='text-white text-bold text-lg'>info@aieraadvert.com</Link>
              </div>
              <div>
                <Link href='tel:+918220967296' className='text-white text-bold text-lg'>+918220967296</Link>
              </div>
            </div>
          )}
<div className='hidden fixed z-10 bottom-4 right-0 left-24    md:block '>
  <div className='inline-flex justify-start space-x-5 mr-56'>
    <Link href='mailto:info@aieraadvert.com' className='text-lg font-bold neon text-yellow-300 bg-clip-text'>info@aieraadvert.com</Link> <span className='text-xl font-bold text-white bg-clip-text'> | </span>
    <Link href='tel:+918220967296' className='text-lg font-bold neon text-yellow-300 bg-clip-text'>+918220967296</Link>
  </div>
  <div className="inline-flex justify-end text-lg font-bold text-white space-x-5 ml-96">
    <Link href="https://twitter.com">
      <FaTwitter className="mr-2" />
    </Link>
    <Link href="https://instagram.com">
      <FaInstagram className="mr-2" />
    </Link>
    <Link href="https://facebook.com">
      <FaFacebook />
    </Link>
  </div>
</div>


    </>
  );
}

export default minifoot;