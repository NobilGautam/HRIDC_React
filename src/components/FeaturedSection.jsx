import React from 'react'
import notifImg from '../assets/banner-image.jpg'
import Marquee from "react-fast-marquee";

const FeaturedSection = () => {
  const prAPI = [
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 2",
        image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
    },
    {
        title: "Press Release 3",
        image: "https://hridc.co.in/img/pressssss--13.jpg", 
    },
    {
        title: "Press Release 1",
        image: "https://hridc.co.in/img/press-nov--02.jpg", 
    },
];
  return (
    <div className='py-20 flex flex-col gap-10'>
        <div className='flex flex-col justify-start'>
            <h1 className='text-[2rem] font-bold px-[5%] text-[#19155e]'>PUBLIC TENDERS</h1>
            <p className='text-[1rem] font-light px-[5%] text-gray-600'>Explore the latest public tenders and procurement opportunities from HRIDC, including detailed information on upcoming projects and bidding requirements.</p>
        </div>

        
        <div className='w-full flex justify-between'>
        <div className='w-[70%]'>
            <div className='flex justify-start px-[8%] items-center mb-10 mt-10'>
                <div className="flex flex-col md:flex-row md:h-[200px] md:max-w-[100%] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='w-[40%] overflow-hidden'>
                        <img className="h-[200px] w-full rounded-t-lg md:rounded-none md:rounded-l-lg" src='https://themetrorailguy.com/wp-content/uploads/2022/01/HORCPatliManesarAlignment.jpg' alt="TENDER" />
                    </div>
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal w-[60%]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HORC/HRIDC/IC-01/2024</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[0.8rem]">
                            Request for Expression of Interest (REoI) for “Appointment of Contract Monitoring Consultant in connection with Contract Package C-4 of HORC Project”.
                        </p>
                        <button className='bg-[#224e9d] hover:bg-[#75a1d2] text-[1rem] p-1 px-4 text-white mb-2 font-semibold duration-300 rounded-md'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-start px-[8%] items-center mb-10 mt-10'>
                <div className="flex flex-col md:flex-row md:h-[200px] md:max-w-[100%] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='w-[40%] overflow-hidden'>
                        <img className="h-[200px] w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src='https://www.punjabnewsexpress.com/images/article/article166984.jpg' alt="TENDER" />
                    </div>
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal w-[60%]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            HRIDC/HORC/GGN/2024/01R
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[0.8rem]">
                            Construction and Erection of Site office at proposed Kharkhoda station yard in connection with Palwal – Sonipat BG double Rail line electrified (HORC) project.
                        </p>
                        <button className='bg-[#224e9d] hover:bg-[#75a1d2] text-[1rem] p-1 px-4 text-white mb-2 font-semibold duration-300 rounded-md'>READ MORE</button>
                    </div>
                </div>
            </div>

            <div className='flex justify-start px-[8%] items-center mb-10'>
                <div className="flex flex-col md:flex-row md:h-[200px] md:max-w-[100%] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <div className='w-[40%] overflow-hidden'>
                        <img className="h-[200px] w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src='https://www.constructionweekonline.in/cloud/2021/11/25/ggXPK7nV-rail-electrification-8-1200x799.jpg' alt="TENDER" />
                    </div>
                    <div className="flex flex-col justify-between items-start p-4 py-8 leading-normal w-[60%]">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HORC/HRIDC/C-6/2024</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-[0.8rem]">
                            Composite Works Contract (Earthwork, Bridges, Station Buildings, Retaining Walls, General Electrical Services and other works) on EPC basis.
                        </p>
                        <button className='bg-[#224e9d] hover:bg-[#75a1d2] text-[1rem] p-1 px-4 text-white mb-2 font-semibold duration-300 rounded-md'>READ MORE</button>
                    </div>
                </div>
            </div>
          </div>
          <div className='w-[40%] bg-[#224e9d] pl-[2%] pt-[2%] pb-[2%]'>
            <div className='flex-col'>
              <div className='h-[30%] '>
                <div className='border-l-2 border-white pl-2 mb-2 mt-8'>
                  <h1 className='text-[1rem] text-white font-poppins font-semibold'>Latest tenders</h1>
                </div>
                <div className='pl-[5%]'>
                  <ul>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>Link to first tender</li>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>Link to second tender</li>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>Link to third tender</li>
                  </ul>
                </div>
              </div>
              <div className='mt-8 h-[30%] '>
                <div className='border-l-2 border-white pl-2 mb-2'>
                  <h1 className='text-[1rem] text-white font-poppins font-semibold'>Current openings</h1>
                </div>
                <div className='pl-[5%]'>
                  <ul>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>This is link to the current opening</li>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>This is link to the current opening</li>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>This is link to the current opening</li>
                    <li className='text-white font-light cursor-pointer mb-1 hover:text-[#7dd1f8] duration-150'>This is link to the current opening</li>
                  </ul>
                </div>
              </div>
              <div className='mt-8'>
                <div className='border-l-2 border-white pl-2 mb-2'>
                  <h1 className='text-[1rem] text-white font-poppins font-semibold'>Press release</h1>
                </div>
                <div className='bg-[#18364b] h-[300px] flex justify-center items-center'>
                  <Marquee className='ml-[25px]' pauseOnHover={true}>
                    {
                      prAPI.map((item, index) => ( 
                        <div className='flex'>
                          <a href={item.title}><img className='h-[250px]' src={item.image} alt="" /></a>
                          <div className='bg-[#18364b] w-[30px]'></div>
                        </div>

                      ))
                    }

                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeaturedSection