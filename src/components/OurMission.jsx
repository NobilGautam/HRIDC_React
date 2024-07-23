import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import cardImg from '../assets/banner-image.jpg';

const OurMission = () => {
  return (
    <>
      <div className='pt-10 pl-[5%] mb-10'>
        <h1 className='text-[3rem] font-bold'>NEWS UPDATES</h1>
        <p className='text-[1.2rem] font-light text-gray-600'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
      </div>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar]}
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='flex justify-center items-center w-[90%] mx-auto relative'
      >
        {[1, 2, 3, 4].map((index) => (
          <SwiperSlide key={index}>
            <div className='max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
              <a href="#">
                <img className='rounded-t-lg' src={cardImg} alt="" />
              </a>
              <div className='p-5'>
                <a href="#">
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{index} Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
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
    </>
  );
}

export default OurMission;
