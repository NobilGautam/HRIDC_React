import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import train from '../assets/banner-image.jpg';

const Testimonials = () => {
  return (
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-[2rem] font-bold mb-5'>WHAT THE CITIZENS OF HARYANA HAVE TO SAY</h1>
      <div className="w-full max-w-4xl p-5 border-2 border-black rounded-xl">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          stopOnHover
          useKeyboardArrows
          dynamicHeight
        >
          <div className='flex'>
            <img className='w-1/3 h-auto' src={train} alt="Slide 1" />
            <div className='w-2/3 flex flex-col justify-center p-5'>
              <h1 className='text-[2rem] font-semibold mb-3'>Anonymous</h1>
              <p className='text-[1rem] font-light'>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
            </div>
          </div>
          <div className='flex'>
            <img className='w-1/3 h-auto object-cover' src={train} alt="Slide 2" />
            <div className='w-2/3 flex flex-col justify-center p-5'>
              <h1 className='text-[2rem] font-semibold mb-3'>Anonymous</h1>
              <p className='text-[1rem] font-light'>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
            </div>
          </div>
          <div className='flex'>
            <img className='w-1/3 h-auto object-cover' src={train} alt="Slide 3" />
            <div className='w-2/3 flex flex-col justify-center p-5'>
              <h1 className='text-[2rem] font-semibold mb-3'>Anonymous</h1>
              <p className='text-[1rem] font-light'>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
              </p>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
