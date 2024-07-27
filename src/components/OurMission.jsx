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
  return (
    <>
      <div className='pt-10 pl-[5%] mb-10'>
        <h1 className='text-[2rem] font-bold text-[#19155e]'>NEWS UPDATES</h1>
        <p className='text-[1rem] font-light text-gray-600'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
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
          pagination={{ clickable: true }}
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
          {[1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index} className='flex justify-center'>
              <div className='max-w-[100%] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                <a href="#">
                  <img className='rounded-t-lg' src='https://img.onmanorama.com/content/dam/mm/en/kerala/top-news/images/2022/4/23/railways-propaganda-paper.png' alt="" />
                </a>
                <div className='p-5'>
                  <a href="#">
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'><span className='text-[#75a1d2]'>{index}</span> Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Read more
                    <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
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
