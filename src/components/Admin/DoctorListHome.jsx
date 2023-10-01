import React from 'react'
import AdminSide from './AdminSide'
import DoctorList from './DoctorList'

const DoctorListHome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
            <DoctorList/>
        </div>
    </div>
  )
}

export default DoctorListHome