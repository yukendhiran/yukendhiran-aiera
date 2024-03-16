"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
   <>
      <nav className='fixed flex  text-white w-5/6 top-8  mx-auto left-8 right-8 z-50 flex-wrap items-center justify-between rounded-3xl  py-4 px-6 rounded-lg shadow-lg   bg-black  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 '>
        <Link
  				href='/'
  				className='inline-flex items-center p-2 mr-4'
			>
  				<span className='text-xl font-bold neon text-yellow-300 bg-clip-text  '>
    				AIERA
  				</span>
			</Link>
      <div className='text-center text-2xl text-white ' > (WIP) "Site under construction - analyzing requirements" </div>

        <button
          className= "inline-flex p-3  rounded lg:hidden text-white ml-auto  outline-none"
          onClick={handleClick}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </button>
       
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto lg:justify-end`}
        >
          <div className='text-center'>
            <a
             href='/'
             className='  px-3 py-2  text-white  items-center  text-lg   neon '>
                Home
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>

            <a
             href="#about"
            
             className='px-3 py-2  text-white  items-center  text-lg   neon '>
                About
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>
             
             <a
             href="#workplan"
             className='px-3 py-2  text-white  items-center  text-lg   neon   '>
                Service
            </a>
            <hr className="lg:hidden border-t-2 border-gray-400 w-full mx-auto my-auto "/>
            
          </div>
           
          
        </div>
      </nav>
    </>
  );
};

export default Nav;