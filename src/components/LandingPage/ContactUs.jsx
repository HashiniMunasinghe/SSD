import React from 'react';
import Image from '../Image/surgery.png'


const ContactUs = () => {
  return (
    <div className='h-[100vh] justify-center  '>
    <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
        <div className='w-[50%] ml-[60px] mt-[100px]'>
            <h2 className='mb-4 text-5xl font-semibold text-green-500'>Contact Us</h2>
            <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Name' />
            </div>
            <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Email' />
            </div>
            <div className='w-[350px] h-[60px] bg-white items-center mt-4 rounded-lg flex'>
                {/* <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Your Message' /> */}
                <textarea className='h-[100%] w-[90%] ml-1 rounded-lg' name="" id="" cols="30" rows="10" placeholder='Enter Your Message'></textarea>
            </div>
            <button className='bg-green-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]'>
                Submit
            </button>
        </div>
        <div className='mt-32 ml-6 '>
            <img className='w-[80%]' src={Image} alt="" />
        </div>
    </div>
</div>
  )
}

export default ContactUs