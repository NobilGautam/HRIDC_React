import React from 'react'
import notifImg from '../assets/banner-image.jpg'

const OurProjects = () => {
  return (
    <div>
        <div className='py-20 flex flex-col gap-10'>
            <div className='flex flex-col justify-start'>
                <h1 className='text-[3rem] font-bold px-[5%]'>OUR PROJECTS</h1>
                <p className='text-[1.2rem] font-light px-[5%] text-gray-600'>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>


            <div className='flex justify-center items-center'>
                <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="max-h-[400px] rounded-t-lg md:rounded-none md:rounded-s-lg" src={notifImg} alt="Notification" />
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                        </p>
                        <div className='flex flow-row gap-5 mb-6'>
                            <h1 className='text-[1.2rem] font-semibold'>Raised: $4,000 USD</h1>
                            <h1 className='text-[1.2rem] font-semibold'>Goal: $6,000 USD</h1>
                        </div>
                        <button className='text-[1.2rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-400 rounded-xl'>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="max-h-[400px] rounded-t-lg md:rounded-none md:rounded-s-lg" src={notifImg} alt="Notification" />
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                        </p>
                        <div className='flex flow-row gap-5 mb-6'>
                            <h1 className='text-[1.2rem] font-semibold'>Raised: $4,000 USD</h1>
                            <h1 className='text-[1.2rem] font-semibold'>Goal: $6,000 USD</h1>
                        </div>
                        <button className='text-[1.2rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-400 rounded-xl'>READ MORE</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="max-h-[400px] rounded-t-lg md:rounded-none md:rounded-s-lg" src={notifImg} alt="Notification" />
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                          Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                        </p>
                        <div className='flex flow-row gap-5 mb-6'>
                            <h1 className='text-[1.2rem] font-semibold'>Raised: $4,000 USD</h1>
                            <h1 className='text-[1.2rem] font-semibold'>Goal: $6,000 USD</h1>
                        </div>
                        <button className='text-[1.2rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-400 rounded-xl'>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProjects