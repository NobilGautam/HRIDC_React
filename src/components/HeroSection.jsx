import React from 'react';
import bgvideo from '../assets/DJI_0077 (1).mp4';

const HeroSection = () => {
  return (
    <div className='relative h-[90vh] flex justify-center items-center flex-col'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' src={bgvideo} autoPlay loop muted />
      <div className='relative z-10 flex flex-col justify-center items-center'>
        <h1 className='text-white text-[2rem] min-[425px]:text-[3rem] md:text-[4rem] font-bold'>HARYANA RAIL</h1>
        <h1 className='text-white text-[2rem] min-[425px]:text-[3rem] md:text-[4rem] font-bold'>INFRASTRUCTURE</h1>
        <p className='text-white text-[1rem] font-light max-w-[60%] text-center'>
          Lorem ipsum dolor sit amet, tenetur doloribus minus mollitia distinctio earum. Ipsum accusantium veritatis cupiditate dignissimos modi, exercitationem alias! Quidem numquam nam vitae error quo optio omnis atque consectetur impedit,!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
