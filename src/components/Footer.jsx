import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsFillTelephoneInboundFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-[#0f172a] h-[30vh] text-gray-100'>
      <div className='max-w-[80%] mx-auto flex justify-between items-center '>
        <div className='py-4'>
          <ul className='px-4 py-2 text-lg'>
            <li>
              <Link to="/login">Admin Login</Link>
            </li>
            <li>
              <a className='hover:text-white' href="">Services</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Appoinment</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Medicine</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className='py-4'>
          <ul className='px-4 py-2 text-lg'>
            <li>
              <a className='hover:text-white' href="">About</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Services</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Appoinment</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Medicine</a>
            </li>
            <li>
              <a className='hover:text-white' href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-6'>
          <p className='text-2xl cursor-pointer hover:text-green-300'><BsFacebook/></p>
          <p className='text-2xl cursor-pointer hover:text-green-300'><BsTwitter/></p>
          <p className='text-2xl cursor-pointer hover:text-green-300'><BsYoutube/></p>
          <p className='text-2xl cursor-pointer hover:text-green-300'><BsFillTelephoneInboundFill/></p>
        </div>
      </div>
    </div >
  )
}

export default Footer