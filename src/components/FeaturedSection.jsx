import React from 'react'
import notifImg from '../assets/banner-image.jpg'

const FeaturedSection = () => {
  return (
    <div className='py-20 flex flex-col gap-10'>
        <div className='flex flex-col justify-start'>
            <h1 className='text-[2rem] font-bold px-[5%]'>GAZETTE NOTIFICATIONS</h1>
            <p className='text-[1rem] font-light px-[5%] text-gray-600'>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
        </div>

        
        <div className='flex justify-center items-center'>
            <div className="flex flex-col md:flex-row md:h-[200px] md:max-w-[60%] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='h-[100%] w-[100%] overflow-hidden'>
                  <img className="h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src='https://img.theweek.in/content/dam/week/news/india/images/2023/4/25/Vande-Bharat.jpg' alt="Notification" />
                </div>
                <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOTIFICATION #1</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Variations of passages of Lorem Ipsum available, but the majority have alteration in some form, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                    </p>
                    <button className='text-[1rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white mb-2 font-semibold duration-300 rounded-xl'>READ MORE</button>
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center'>
            <div className="flex flex-col md:flex-row md:h-[200px] md:max-w-[60%] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div className='h-[100%] w-[100%] overflow-hidden'>
                  <img className="h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src='https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2017/05/02/d41d0d6db308a6f688e46f519a82e2c3.jpg' alt="Notification" />
                </div>
                <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NOTIFICATION #2</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Variations of passages of Lorem Ipsum available, but the majority have alteration in some form, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                    </p>
                    <button className='text-[1rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold mb-2 duration-300 rounded-xl'>READ MORE</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection