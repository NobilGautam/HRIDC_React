import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cardImg from '../assets/banner-image.jpg';
import { MdNavigateNext } from "react-icons/md";

const OurMission = () => {
  const newsUpdates = [
    {
      image: 'https://themetrorailguy.com/wp-content/uploads/2023/03/HaryanaHORCRouteMap.jpg',
      title: '12 Bidders for Haryana Orbital Rail Corridors C6 Contract'
    },
    {
      image: 'https://images.thequint.com/thequint%2F2019-09%2F26339b49-f094-4e87-887c-2b1ea73aa585%2F736cadd242947e6227704d29733cfc58.jpg',
      title: 'Decks cleared for two rail lines in Haryana'
    },
    {
      image: 'https://www.equitypandit.com/wp-content/uploads/2023/04/PNC-Infratech-Shares-Up-2-on-Rs-772-Crore-Haryana-Rail-Infrastructure-Project-EP.jpg',
      title: 'PNC Infratech Shares Up 2% on Rs 772 Crore HRIDC Project'
    }, 
    {
      image: 'https://www.yugmarg.com/images/news/full6676.jpg',
      title: '5th Foundation Day of HRIDC celebrated'
    }
  ]
  return (
    <>
      <div className='pt-10 pl-[5%] mb-10'>
        <h1 className='text-[2rem] font-bold text-[#19155e]'>NEWS UPDATES</h1>
        <p className='text-[1rem] font-light text-gray-600'>Stay informed with the latest news and updates from HRIDC, including project milestones, announcements, and developments in rail infrastructure.</p>
      </div>
      <div className='relative w-[90%] mx-auto'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={3.5}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 3.5, // 3 slides per view for screens 768px and up
            },
            425: {
              slidesPerView: 2.5, // 2 slides per view for screens less than 768px
            },
            0: {
              slidesPerView: 1.5,
            }
          }}
          className='flex justify-center items-center w-full relative'
        >
          {newsUpdates.map((item,index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <div className='max-w-[100%] h-[400px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href="#">
                  <img className='rounded-t-lg h-[200px] w-full' src={item.image} alt="" />
                </a>
                <div className='p-5 flex flex-col justify-between h-[200px]'>
                  <a href="#">
                    <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>{item.title}</h5>
                  </a>
                  {/* <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
                  <div className='w-full flex justify-end mt-8'>
                    <a href="#" className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-md bg-[#224e9d] hover:bg-[#75a1d2] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                      Read more
                      <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-nav-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 scale-75 cursor-pointer text-white bg-gray-500 w-4 h-4 p-8 rounded-full">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={8} d="M15 19l-7-7 7-7" />
          </svg> */}
        </div>
        <div className="swiper-button-next custom-nav-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 scale-75 cursor-pointer text-white bg-gray-500 w-4 h-4 p-8 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900 dark:text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default OurMission;
