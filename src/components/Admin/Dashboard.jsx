import React from 'react';
import AdminDash from '../Image/admindash.png'

const Dashboard = () => {
  return (
    <div>
        <div>
            <div className='py-4 mt-6 text-center'>
                <h1 className='text-4xl font-semibold text-green-600'>Welcome To Admin Dashboard</h1>
            </div>
            <div className='h-[50%] justify-center ml-32 mt-6'>
                <img className='h-[600px]' src={AdminDash} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Dashboard