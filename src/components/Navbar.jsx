import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Image/logo.png';


const Navbar = () => {
  return (
    <div className='text-green-500 bg-white shadow-md '>
      <div className='max-w-[90%] mx-auto flex justify-between items-center'>
        <div className='flex items-center w-24 cursor-pointer'>
          <img src={Logo} alt="rrtr"/>
          <div>
            <Link to='/'><h2 className='text-2xl font-semibold uppercase border-b-2'>Hospital</h2></Link>
            <h3 className='text-md '>Health Service</h3>
          </div>
        </div>
        <div className='flex'>
          <ul className='flex gap-6 px-4 py-2 text-xl font-semibold'>
            <li>
            <Link to='about' className='hover:text-green-300'>About</Link>
            </li>
            <li>
              <Link to='services' className='hover:text-green-300'>Services</Link>
            </li>
            <li>
            <Link to='appoinment' className='hover:text-green-300'>Appoinment</Link>
            </li>
            <li>
              <a className='hover:text-green-300' href="">Medicine</a>
            </li>
            <li>
            <Link to='contact' className='hover:text-green-300'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='px-4 py-2 text-white bg-green-800 border rounded-md hover:bg-white border-2-green-600 w-30 text-xxl hover:text-black'>
          <Link to='/login'><button>Login</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar