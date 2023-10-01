import React from 'react';
import Image from './Image/consulting.png'
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";


const Signup = () => {
  return (
    <div className='h-[100vh] justify-center  '>
      <div className='w-[800px] h-[60vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
        <div className='w-[50%] ml-[60px] mt-[100px]'>
          <h2 className='text-4xl text-black font-semibold mb-4'>SignUp</h2>
          <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
            <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email' />
            <p className='text-xl'><AiOutlineMail /></p>
          </div>
          <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
            <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email' />
            <p className='text-xl'><BsKey /></p>
          </div>
          <button className='bg-green-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'>
            SignUp
          </button>
        </div>
        <div className='mt-12 ml-6 '>
          <img className='w-[80%]' src={Image} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Signup