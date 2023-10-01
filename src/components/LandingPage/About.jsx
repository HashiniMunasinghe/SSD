import React from 'react';
import AboutI from '../Image/aabout.png';

const About = () => {
  return (
    <div className='h-[80vh]'>
      <div className='flex max-w-[70%] mx-auto items-center bg-green-50 shadow-lg rounded-lg  mt-10 h-[300px] hover:drop-shadow-xl'>
        <div className='px-4 py-2'>
          <h1 className='text-6xl text-green-500 font-semibold  w-[50%] py-2'>About Us</h1>
          <p className='mt-4 font-sans text-lg font-thin'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quod velit nihil vel molestiae sint deleniti? Sapiente necessitatibus iusto a voluptate, neque libero. Recusandae praesentium impedit nesciunt rem, deleniti perferendis!
          Maiores itaque adipisci neque sit non eveniet ut mollitia fugit id accusantium nulla dolore, ipsa rem, aliquam eum provident veritatis. Odit molestiae vel velit dolore non, officia ullam quaerat quam.</p>
        </div>
        <div className='h-[100%]'>
          <img src={AboutI} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About