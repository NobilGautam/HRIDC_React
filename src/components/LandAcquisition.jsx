import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { IoOpenOutline } from "react-icons/io5";


const LandAcquisition = () => {
    const landAcqData = [
        {
            sno: '1',
            title: '1st Additional 20A Sonipat E Gazette',
        },
        {
            sno: '2',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '3',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '4',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '5',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '6',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '7',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '1',
            title: '1st Additional 20A Sonipat E Gazette',
        },
        {
            sno: '2',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '3',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '4',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '5',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '6',
            title: 'E-Gazette 20E Sonipat 254843',
        },
        {
            sno: '7',
            title: 'E-Gazette 20E Sonipat 254843',
        },
    ]

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    
  return (
    <div>
        <div>
            <h1 className='text-[2rem] font-bold my-10 ml-10'>LAND ACQUISITION</h1>
            <div className='flex justify-center my-4'>
                <div className='flex w-[90%] px-[1%]'>
                    <h1 className='font-semibold w-[20%] text-[1rem]'>S. No.</h1>
                    <h1 className='font-semibold w-[60%] text-[1rem]'>Title</h1>
                    <h1 className='font-semibold w-[20%] text-[1rem] text-right pr-[2%]'>Actions</h1>
                </div>
            </div>
            <div className='flex items-center flex-col gap-4 mb-10  '>
                {landAcqData.map((item, index) => (
                    <div data-aos="fade-zoom-in" className={`flex flex-row w-[90%] py-4 rounded-xl ${index % 2 === 0 ? 'bg-[#d2e2f5]' : 'bg-[#cbd3df]'}`}>
                        <div className='w-[20%] flex justify-start pl-[5%] items-center'>
                            <h1 className='font-semibold text-[1rem]'>{item.sno}</h1>
                        </div>
                        <div className='w-[60%] flex justify-start items-center'>
                            <h1>{item.title}</h1>
                        </div>
                        <div className='w-[20%] flex justify-end items-center pr-[5%]'>
                            <IoOpenOutline className='text-[1.4rem]'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LandAcquisition