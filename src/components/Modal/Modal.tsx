import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Crime from '../Crime/Crime';
import { ClipLoader } from 'react-spinners';
import './modal.css'


const Modal = ({ setModalOpen, modalOpen}: {modalOpen: Boolean, setModalOpen: React.Dispatch<React.SetStateAction<Boolean>> }) => {
    const [charts, setCharts] = useState([])


    const closeModal = () => {
        setModalOpen(false);
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/chart');
            console.log(response.data)
            setCharts(response.data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [modalOpen])


    return (
        <div>
            {modalOpen && (
                <div className="fixed  inset-0 flex items-start overflow-y-hidden py-[2rem] justify-center z-50">
                    <div className="modal-background fixed w-full h-full top-0 left-0 bg-black opacity-50">

                    </div>

                    <div className="h-[4rem] flex items-center max-w-[90%] mx-auto justify-end px-[1rem] bg-blue-50 fixed z-[700] top-0 w-full">
                    <button
                        onClick={closeModal}
                        className="bg-red-600 hover:bg-red-400 duration-300  text-white py-2 px-4 rounded-sm"
                    >
                        Close
                    </button>
                    </div>

                    <div className="modal-content z-[500] sm:border border-dashed max-h-[30rem] overflow-y-auto rounded-md  flex items-center flex-col mt-[5rem] gap-y-[1rem]  w-full max-w-[40rem]  p-8  shadow-lg">
                        {
                           charts?.length >0? charts?.map((data:any)=>{
                                return <>
                                <Crime key={data?._id} data={data} charts={charts} setCharts={setCharts}/>
                                </>
                            }): <ClipLoader color='white' size={15} />
                        }
                    </div>
                    
                </div>
            )}
        </div>
    );
};

export default Modal;
