import React from 'react';
import { BsBookHalf } from "react-icons/bs";
import { BiQrScan } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GiMedicines } from "react-icons/gi";
import { FaHospitalAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminSide = () => {
    return (
        <div className='h-[100vh] bg-[#134e4a] text-white mt-[-25px] cursor-pointer'>
            <Link to='/admin'><div className='px-6 py-4 mt-6'>
                <h1 className='text-2xl font-semibold '>Admin Dashboard</h1>
            </div>
            </Link>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'><Link to='/admin/appoinments'>Appoinments</Link></h2>
                <p className='ml-10 '><BsBookHalf /></p>
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'><Link to='/admin/doctor-list'>Doctors</Link></h2>
                    <p className='ml-10 '><AiOutlineUserAdd /></p>
                
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'>Scan</h2>
                <p className='ml-10 '><BiQrScan /></p>
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'>Pharmacy</h2>
                <p className='ml-10 '><GiMedicines /></p>
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'>Surgery</h2>
                <p className='ml-10 '><FaHospitalAlt /></p>
            </div>
            <div className='flex items-center px-6 py-2 border-b-2 border-green-300  ml-4 gap-4 cursor-pointer hover:bg-[#0f766e] justify-between'>
                <h2 className='mt-6 text-xl'>Contact</h2>
                <p className='ml-10 '><GiMedicines /></p>
            </div>

        </div>
    )
}

export default AdminSide