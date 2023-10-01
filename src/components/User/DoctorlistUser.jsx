import React, { useState, useEffect } from 'react'
import doctorDataService from '../../Services/DoctorService';
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const DoctorlistUser = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);


    const getDoctors = async () => {
        const data = await doctorDataService.getAllDoctor();
        console.log(doctors);
        setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    return (
        <div className='h-[100vh] w-[90%]'>
            <h1 className='text-center text-3xl font-semibold text-green-500 mt-6'>Avalable Doctors</h1>
            <table class="w-[1000px] p-2 ml-14 mt-14 ml-[300px] mx-auto">
                <thead className='items-center justify-between p-2 bg-green-700'>
                    <tr className='p-1' >
                        <th className='p-4 text-2xl text-white'>Name</th>
                        <th className='p-4 text-2xl text-white'>NIC</th>
                        <th className='p-4 text-2xl text-white'>Register Number</th>
                        <th className='p-4 text-2xl text-white'>Specialization</th>
                        <th className='p-4 text-2xl text-white'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {doctors.map((doc, index) => {
                        return (
                            <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-green-500 hover:bg-green-200'>
                                <td className='px-4 py-2 text-left'>{doc.name}</td>
                                <td className='px-4 py-2 text-left'>{doc.nic}</td>
                                <td className='px-4 py-2 text-left'>{doc.registerno}</td>
                                <td className='px-4 py-2 text-left'>{doc.specialization}</td>
                                <td>
                                    <button className='bg-red-600 rounded-lg px-3 py-1 text-white hover:bg-red-500'>Book</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DoctorlistUser