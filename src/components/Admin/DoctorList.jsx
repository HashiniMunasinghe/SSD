import React, { useState, useEffect } from 'react'
import doctorDataService from '../../Services/DoctorService';
import { Link } from 'react-router-dom'
import { AiFillDelete,AiFillEdit } from "react-icons/ai";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorList = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);


    const getDoctors = async () => {
        const data = await doctorDataService.getAllDoctor();
        console.log(doctors);
        setDoctors(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await doctorDataService.deleteDoctor(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getDoctors();
        })
            .catch((err) => {
                console.log(err);
            })

    };
    
    return (
        <div>
            <Link to='/admin/add-doctors'><button className='px-4 py-2 mt-10 ml-8 bg-green-500 border hover:bg-white hover:border-2-green-500'>Add Doctor</button></Link>
            <table class="w-[1000px] p-2 ml-14 mt-14">
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
                            <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-green-500 hover:bg-gray-400'>
                                <td className='px-4 py-2 text-left'>{doc.name}</td>
                                <td className='px-4 py-2 text-left'>{doc.nic}</td>
                                <td className='px-4 py-2 text-left'>{doc.registerno}</td>
                                <td className='px-4 py-2 text-left'>{doc.specialization}</td>
                                <td className='px-4 py-2 text-left'>
                                <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                                    <AiFillDelete  className='hover:bg-green-500' onClick={(e) => deleteHandler(doc.id)}/>
                                        <AiFillEdit className='hover:bg-green-500' />
                                    </div>

                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
        </div>
    )
}

export default DoctorList