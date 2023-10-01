import React, { useState } from 'react';
import Image from '../Image/scn.png'
import { AiOutlineUser, AiFillCreditCard, AiOutlineFieldNumber, AiOutlinePhone } from "react-icons/ai";
import doctorDataService from '../../Services/DoctorService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AddDoctors = () => {

    const [name, setName] = useState("")
    const [nic, setNic] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [registerno, setRegisterno] = useState("")
    const navigate = useNavigate();

    const submitButton = async (e) => {

        if (name === "") {
            toast.error('Name is required!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (nic === "") {
            toast.error('NIC is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (specialization === "") {
            toast.error('Specialization is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else if (registerno === "") {
            toast.error('Register Number is required !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            await doctorDataService.addDoctor({
                name, nic, registerno, specialization
            });
            navigate("/admin/doctor-list");
            toast.success('Added Success !', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    return (
        <div className='h-[70vh] justify-center  '>
            <div className='w-[800px] h-[80vh] bg-gray-100 mx-auto mt-20 flex rounded-xl shadow-xl justify-between'>
                <div className='w-[50%] ml-[60px] mt-[100px]'>
                    <h2 className='mb-4 text-4xl font-semibold text-black'>Add New Doctor</h2>
                    <div className='w-[350px] h-[40px] bg-white items-center  rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor Name'
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <p className='text-xl'><AiOutlineUser /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor NIC'
                            name="nic"
                            onChange={(e) => setNic(e.target.value)}
                            value={nic}
                        />
                        <p className='text-xl'><AiFillCreditCard /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Register Number'
                            name="registerno"
                            onChange={(e) => setRegisterno(e.target.value)}
                            value={registerno}
                        />
                        <p className='text-xl'><AiOutlineFieldNumber /></p>
                    </div>
                    <div className='w-[350px] h-[40px] bg-white items-center mt-4 rounded-lg flex'>
                        <input className='h-[100%] w-[90%] ml-1 rounded-lg' type="text" placeholder='Enter Doctor Specialization'
                            name="specialization"
                            onChange={(e) => setSpecialization(e.target.value)}
                            value={specialization}
                        />
                        <p className='text-xl'><AiOutlinePhone /></p>
                    </div>
                    <button className='bg-green-400 text-white px-6 py-1 rounded-lg text-xl hover:text-green-500 hover:bg-white mt-[20px]' onClick={submitButton}>
                        Add Doctor
                    </button>
                </div>
                <div className='mt-32 ml-6 '>
                    <img className='w-[80%]' src={Image} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddDoctors