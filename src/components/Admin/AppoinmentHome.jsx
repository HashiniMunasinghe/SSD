import React from 'react'
import Appoinmets from './Appoinmets';
import AdminSide from './AdminSide';

const AppoinmentHome = () => {
  return (
    <div className='flex'>
    <div className='w-[20%]'>
        <AdminSide/>
    </div>
    <div className='w-[80%]'>
       <Appoinmets/> 
    </div>
</div>
  )
}

export default AppoinmentHome