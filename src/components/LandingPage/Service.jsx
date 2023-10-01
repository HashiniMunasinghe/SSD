import React from 'react';
import Scan from '../Image/scn.png';
import Surgery from '../Image/surgery.png';
import Consulting from '../Image/consulting.png';
import Pharmacy from '../Image/pharmacy.png';

const Service = () => {
  return (
    <div className='w-[100%] mt-10'>
      <h1 className='text-green-500 text-6xl font-semibold mx-auto text-center pt-4  w-[30%] mb-8'>Our Services</h1>
      <div className='w-[80%] flex justify-between mx-auto'>
        <div className='p-4 mr-4 rounded-md shadow-lg  bg-slate-100 hover:shadow-2xl'>
          <h2 className='p-4 text-3xl font-bold text-center text-green-600'>Scan </h2>
          <img className='w-80' src={Scan} alt="" />
          <p className='py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus 
            ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia 
            perferendis vero sed ipsa quos.</p>
        </div>
        <div className='p-4 mr-4 rounded-md shadow-lg  bg-slate-100 hover:shadow-2xl'>
          <h2 className='p-4 text-3xl font-bold text-center text-green-600'>Surgery</h2>
          <img className='w-80' src={Surgery} alt="" />
          <p className='py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus 
            ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia 
            perferendis vero sed ipsa quos.</p>
        </div>
        <div className='p-4 mr-4 rounded-md shadow-lg  bg-slate-100 hover:shadow-2xl'>
          <h2 className='p-4 text-3xl font-bold text-center text-green-600'>Consulting</h2>
          <img className='w-80' src={Consulting} alt="" />
          <p className='py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus 
            ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia 
            perferendis vero sed ipsa quos.</p>
        </div>
        <div className='p-4 mr-4 rounded-md shadow-lg  bg-slate-100 hover:shadow-2xl'>
          <h2 className='p-4 text-3xl font-bold text-center text-green-600'>Pharmacy</h2>
          <img className='w-80' src={Pharmacy} alt="" />
          <p className='py-4 mt-4 font-sans font-thin text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem aliquid natus 
            ab eum eveniet a excepturi doloribus nam quaerat accusantium, est odio velit officia 
            perferendis vero sed ipsa quos.</p>
        </div>
      </div>
    </div>
  )
}

export default Service