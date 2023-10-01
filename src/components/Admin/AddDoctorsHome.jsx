import React from 'react'
import AddDoctors from './AddDoctors';
import AdminSide from './AdminSide';

const AddDoctorsHome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
           <AddDoctors/> 
        </div>
    </div>
  )
}

export default AddDoctorsHome