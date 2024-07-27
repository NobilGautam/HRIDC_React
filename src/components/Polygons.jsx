import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';

const Polygons = () => {
    return (
        <div className='flex flex-wrap justify-center gap-8 mb-20'>
            <div className="md:w-[22%]">
              <div className="w-auto bg-[#224e9d] hover:bg-[#75a1d2] duration-200 h-[400px] p-8 clip-path-polygon flex flex-col items-center">
                <div className="">
                  <img src={icon1} alt="icon" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-4">OUR VISION</h4>
                <p className="text-white mb-4 w-[100%] text-center text-justify font-light">To develop top-tier, fast, and safe rail infrastructure, connecting all of Haryana, including underserved areas, and boosting regional economic and social activity.</p>
                <div>
                  <a href="#" className="text-white border-[1px] font-semibold border-white  px-4 py-2 rounded-xl">Know More</a>
                </div>
              </div>
            </div>
            <div className="md:w-[22%]">
              <div className="w-auto bg-[#224e9d] hover:bg-[#75a1d2] h-[400px] p-8 clip-path-polygon flex flex-col items-center">
                <div className="mb-4">
                  <img src={icon2} alt="icon" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-4">Haryana Rail</h4>
                <p className="text-white mb-4 w-[70%] text-center font-light">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                <div>
                  <a href="#" className="text-white border-[1px] font-semibold border-white  px-4 py-2 rounded-xl">Join Now</a>
                </div>
              </div>
            </div>
            <div className="md:w-[22%]">
              <div className="w-auto bg-[#224e9d] duration-200 hover:bg-[#75a1d2] h-[400px] p-8 clip-path-polygon flex flex-col items-center">
                <div className="mb-4">
                  <img src={icon3} alt="icon" />
                </div>
                <h4 className="text-white text-2xl font-bold mb-4">Haryana Rail</h4>
                <p className="text-white mb-4 w-[70%] text-center font-light">Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                <div>
                  <a href="#" className="text-white border-[1px] font-semibold border-white  px-4 py-2 rounded-xl">Join Now</a>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Polygons;

const Pentagon = ({ children }) => (
    <svg className="w-[300px] h-[300px]" viewBox="0 0 100 100">
      <polygon
        points="50,10 90,40 90,182 10,182 10,40"
        style={{ fill: "#007bff", stroke: "#007bff", strokeWidth: 1 }}
        transform="rotate(180, 50, 50)"
      />
      {children}
    </svg>
);
