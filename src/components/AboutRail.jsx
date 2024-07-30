import React from 'react';
import CountUp from 'react-countup';
import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log('IntersectionObserver triggered', entry.isIntersecting);
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

const AboutRail = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className='flex flex-col'>
      <div className='flex md:flex-row flex-col h-fit p-20 justify-between gap-5 bg-[#224e9d]'>
        <div className='flex flex-col gap-2 items-start md:w-[70%]'>
            <h1 className='text-[2rem] font-bold text-white'>ABOUT HARYANA RAIL</h1>
            <p className='max-w-[90%] text-[1rem] font-light text-white font-poppins'>The Haryana Rail Infrastructure Development Corporation (HRIDC) is dedicated to enhancing the rail infrastructure across Haryana. HRIDC aims to develop high-quality, efficient, and safe railway networks, connecting urban and rural areas, including underserved regions. This initiative is designed to boost economic growth, improve transportation logistics, and enhance regional connectivity, thereby fostering socio-economic development. By prioritizing sustainable and modern railway solutions, HRIDC strives to create a seamless and reliable rail system, promoting mobility and accessibility for all residents of Haryana. The corporation’s vision is to transform Haryana into a hub of advanced rail infrastructure, contributing significantly to the state's development.</p>
            <button className='hover:bg-white hover:text-[#19155e] font-semibold px-8 duration-300 border-[1px] border-white py-2 text-[1rem] rounded-md mt-8 text-white'>READ MORE</button>
        </div>
        <div className='flex flex-col justify-center md:w-[30%]'>
            <img className='rounded-xl xl:h-[150%] lg:h-[100%]' src='https://hridc.co.in/img/visit-of-ncrtc.jpg'/>
        </div>
      </div>
      <div className='w-full flex bg-[#18364b] py-[2%] justify-between items-center'>
        <div ref={ref1} className='w-[30%] pl-[2%] pr-[2%] border-r-2 border-white flex flex-col-reverse ml-[5%] h-fit'>
          <h1 className='text-[1.5rem] text-white font-poppins'>KMs of track laid.</h1>
          {isVisible1 && <p className='text-[3rem] text-[#ffffff] font-bold font-poppins'><CountUp end={5000} duration={0.5}/>+</p>}
        </div>
        <div ref={ref2} className='w-[30%] pl-[2%] pr-[2%] h-fit border-r-2 border-white flex flex-col-reverse'>
          <h1 className='text-[1.5rem] text-white font-poppins'>Employees hired.</h1>
          {isVisible2 && <p className='text-[3rem] text-[#ffffff] font-bold font-poppins'><CountUp end={1000} duration={0.5}/>+</p>}
        </div>
        <div ref={ref3} className='w-[30%] p-[2%] flex flex-col-reverse'>
          <h1 className='text-[1.5rem] text-white font-poppins'>Tenders released.</h1>
          {isVisible3 && <p className='text-[3rem] text-[#ffffff] font-bold font-poppins'><CountUp end={176} duration={0.5}/></p>}
        </div>
      </div>
    </div>
  );
}

export default AboutRail;
