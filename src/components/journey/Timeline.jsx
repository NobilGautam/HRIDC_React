import React from 'react';
import '../../index.css'; // Ensure this file contains your custom scrollbar styles if needed

const Timeline = () => {
    const events = [
        { year: '2010', description: 'HRIDC was established to enhance the rail infrastructure.', image: 'https://hridc.co.in/img/constitution-day-celebration-in-hridc-.jpg' },
        { year: '2012', description: 'First major project was completed connecting areas.', image: 'https://hridc.co.in/img/MoU-for-renewable-energy.jpg' },
        { year: '2015', description: 'Expansion into rural areas began to improve connectivity.', image: 'https://hridc.co.in/img/MoU-for-renewable-energy.jpg' },
        { year: '2018', description: 'Launched new sustainable railway solutions.', image: 'https://hridc.co.in/img/visit-of-ncrtc.jpg' },
        { year: '2020', description: 'Received award for best rail infrastructure development.', image: 'https://hridc.co.in/img/agreement-signing-ceremony-between-hridc-and-ncrtc.jpg' },
        { year: '2022', description: 'Achieved milestone of 5000 km of track laid.', image: 'https://hridc.co.in/img/Ground-Breaking-Ceremony.jpg' },
    ];

    return (
        <div className="py-10">
            <h2 className="text-3xl font-bold text-center mb-6 text-[#18364b]">JOURNEY SO FAR</h2>
            <div className='relative'>
                {/* The horizontal line below the timeline items */}
                <div className='h-2 bg-[#18364b] absolute top-[50%] left-0 right-0 transform -translate-y-1/2 z-0'></div>

                <div className='scroll-wrapper relative z-10'>
                    <div className='scroll-content py-4 gap-20 w-full'>
                        {events.map((item, index) => (
                            <div key={index} className={`relative flex flex-col items-center h-[300px]`}>
                                <div className='flex items-center justify-center w-[300px] min-h-[300px] mx-4 relative z-10'>
                                    <div className={`flex flex-col hover:border-[#18364b] border-2 p-4 rounded-md border-gray-200 bg-white duration-75 relative z-10`}>
                                        <div>
                                            <img className='h-[150px] w-[100%]' src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-[1.5rem] font-bold font-poppins'>{item.year}</h1>
                                        </div>
                                        <div>
                                            <p className='font-medium font-poppins text-gray-800'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate content to ensure smooth scrolling */}
                        {events.map((item, index) => (
                            <div key={`duplicate-${index}`} className={`relative flex flex-col items-center h-[300px]`}>
                                <div className='flex items-center justify-center w-[300px] min-h-[300px] mx-4 relative z-10'>
                                    <div className={`flex flex-col hover:border-[#18364b] border-2 p-4 rounded-md border-gray-200 bg-white duration-75 relative z-10`}>
                                        <div>
                                            <img className='h-[150px] w-[100%]' src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-[1.5rem] font-bold font-poppins'>{item.year}</h1>
                                        </div>
                                        <div>
                                            <p className='font-medium font-poppins text-gray-800'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
