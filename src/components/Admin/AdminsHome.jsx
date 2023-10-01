import React from 'react'
import AdminSide from './AdminSide'
import Dashboard from './Dashboard'

const AdminsHome = () => {
  return (
    <div className='flex'>
        <div className='w-[20%]'>
            <AdminSide/>
        </div>
        <div className='w-[80%]'>
           <Dashboard/> 
        </div>
    </div>
  )
}

export default AdminsHome