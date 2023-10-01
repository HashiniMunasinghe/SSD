import React, { useState, useEffect } from 'react'
import appoinmentDataService from '../../Services/AppoinmentService';
import { Link } from 'react-router-dom'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appoinmets = () => {

    const [appoinments, setAppoinments] = useState([]);

    useEffect(() => {
        getAppoinments();
    }, []);


    const getAppoinments = async () => {
        const data = await appoinmentDataService.getAllAppoinments();
        console.log(appoinments);
        setAppoinments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };


    const deleteHandler = async (id) => {

        await appoinmentDataService.deleteAppoinment(id).then(() => {
            toast.success('Delete Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
            getAppoinments();
        })
            .catch((err) => {
                console.log(err);
            })

    };


    return (
        <div>
            <Link to='/admin/add-doctors'><button className='px-4 py-2 mt-10 ml-8 bg-green-500 border hover:bg-white hover:border-2-green-500'>Add Appoinment</button></Link>
            <table class="w-[1000px] p-2 ml-14 mt-14">
                <thead className='items-center justify-between p-2 bg-green-700'>
                    <tr className='p-1' >
                        <th className='p-4 text-2xl text-white'>Name</th>
                        <th className='p-4 text-2xl text-white'>NIC</th>
                        <th className='p-4 text-2xl text-white'>Address</th>
                        <th className='p-4 text-2xl text-white'>Date</th>
                        <th className='p-4 text-2xl text-white'>Phone</th>
                        <th className='p-4 text-2xl text-white'>Doctor</th>
                        <th className='p-4 text-2xl text-white'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {appoinments.map((doc, index) => {
                        return (
                            <tr key={doc.id} className='items-center p-4 text-xl border-b-[1px]  border-green-500 hover:bg-gray-400'>
                                <td className='px-4 py-2 text-left'>{doc.name}</td>
                                <td className='px-4 py-2 text-left'>{doc.nic}</td>
                                <td className='px-4 py-2 text-left'>{doc.address}</td>
                                <td className='px-4 py-2 text-left'>{doc.date}</td>
                                <td className='px-4 py-2 text-left'>{doc.phone}</td>
                                <td className='px-4 py-2 text-left'>{doc.doctor}</td>
                                <td className='px-4 py-2 text-left'>
                                    <div className='flex gap-2 ml-8 text-xl cursor-pointer'>
                                        <AiFillDelete className='hover:bg-green-500' onClick={(e) => deleteHandler(doc.id)} />
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

export default Appoinmets