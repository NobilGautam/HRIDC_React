import React from 'react'
import notifImg from '../assets/banner-image.jpg'
import { Link } from 'react-router-dom'

const OurProjects = () => {
  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('https://png.pngtree.com/background/20230424/original/pngtree-mountain-railway-track-isolated-for-desktop-or-mobile-wallpaper-picture-image_2456052.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#11121b] opacity-60"></div>
        <div className='flex w-full relative z-10'>
            <h1 className='text-[2rem] font-poppins font-bold text-center text-white w-full mt-8'>OUR PROJECTS</h1>
        </div>

        <div className='h-fit bg-gradient-to-r py-2 my-2  from-black to-transparent opacity-70 text-white font-poppins font-semibold pl-5'>Previous projects</div>
      
        <div className='flex flex-wrap p-8 w-full gap-8 justify-center items-center'>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://t4.ftcdn.net/jpg/00/78/74/29/360_F_78742999_Wlog4mQ21GXku23VdT2wnWQW0bq9Peim.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://www.shutterstock.com/image-photo/engineer-under-discussion-inspection-checking-260nw-1812749569.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://img.freepik.com/free-photo/trains-railways-transport-concept_23-2148959701.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>

        <div className='h-fit bg-gradient-to-r py-2 my-2  from-black to-transparent opacity-70 text-white font-poppins font-semibold pl-5'>Ongoing projects</div>
        <div className='flex flex-wrap p-8 w-full gap-8 justify-center items-center'>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://thumbs.dreamstime.com/b/workers-uniform-tighten-bolts-installation-railway-rails-trams-reconstruction-tram-tracks-generative-ai-carry-out-291739995.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://www.hindustantimes.com/ht-img/img/2023/06/05/1600x900/Mumbai--India---August-12--2018--Railway-Gangman-w_1685992713184.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div class="max-w-sm hover:scale-105 duration-200 relative z-10 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-md w-[382px] h-[190px]" src='https://img.theweek.in/content/dam/week/news/india/images/2023/4/25/Vande-Bharat.jpg' alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                         <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
      {/* Content */}
      {/* <div className="relative z-10 flex flex-col justify-start py-20">
        <h1 className='text-[2rem] font-bold px-[5%] text-white'>OUR PROJECTS</h1>
        <div className='flex flex-col gap-10 items-center'>
          <div className='flex justify-center items-center'>
            <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-md shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="max-h-[400px] rounded-t-md w-[382px] h-[190px] md:rounded-none md:rounded-s-md" src={notifImg} alt="Notification" />
              <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <div className='flex flow-row gap-5 mb-6'>
                  <h1 className='text-[1rem] font-semibold'>Raised: $4,000 USD</h1>
                  <h1 className='text-[1rem] font-semibold'>Goal: $6,000 USD</h1>
                </div>
                <button className='text-[1rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-300 rounded-xl ease-in-out'>READ MORE</button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-md shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="max-h-[400px] rounded-t-md w-[382px] h-[190px] md:rounded-none md:rounded-s-md" src={notifImg} alt="Notification" />
              <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <div className='flex flow-row gap-5 mb-6'>
                  <h1 className='text-[1rem] font-semibold'>Raised: $4,000 USD</h1>
                  <h1 className='text-[1rem] font-semibold'>Goal: $6,000 USD</h1>
                </div>
                <button className='text-[1rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-300 rounded-xl ease-in-out'>READ MORE</button>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className="flex flex-col md:max-h-[400px] md:max-w-[90%] py-4 items-center bg-white border border-gray-200 rounded-md shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img className="max-h-[400px] rounded-t-md w-[382px] h-[190px] md:rounded-none md:rounded-s-md" src={notifImg} alt="Notification" />
              <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PROJECT 1</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.
                </p>
                <div className='flex flow-row gap-5 mb-6'>
                  <h1 className='text-[1rem] font-semibold'>Raised: $4,000 USD</h1>
                  <h1 className='text-[1rem] font-semibold'>Goal: $6,000 USD</h1>
                </div>
                <button className='text-[1rem] border-2 border-[#727171] p-1 px-4 hover:bg-gray-600 hover:text-white font-semibold duration-300 rounded-xl ease-in-out'>READ MORE</button>
              </div>
            </div>
          </div>
          <Link to='/projects'>
            <button className='text-[1rem] border-[1px] border-[#224e9d] rounded-xl w-fit px-4 py-2 text-[#224e9d] font-bold hover:bg-[#224e9d] hover:text-white duration-300'>
              View All
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default OurProjects
