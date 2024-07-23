import React from 'react';
import bannerImg from '../../assets/banner-image.jpg';

const Carousel = () => {
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Item 1 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <div className="relative h-full">
            <img
            //this is the background image
              src={bannerImg}
              className="absolute block w-full h-full object-cover"
              alt="..."
            />
            <div className='absolute top-0 left-0 m-10 p-10 border-[1px] bg-black bg-opacity-50 border-white rounded-xl flex justify-between items-center'>
                <div className='w-[30%] p-10 flex justify-center items-center'>
                    <img src={bannerImg} className='w-[100px] h-[100px]' alt=""/>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='text-[2rem] text-white font-bold'>Anonymous</h1>
                    <p className='text-[1.2rem] font-light text-white w-[90%]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum rem eos, inventore voluptas ullam sit eum fugit dignissimos adipisci reiciendis itaque nihil quasi quo laborum qui magnam dolor. Nihil unde non, iusto perspiciatis magnam, sunt sit error itaque ipsa iure fuga ipsum numquam voluptate cumque repellendus dicta vel quasi.
                    </p>
                </div>
            </div>
          </div>
          </div>
        {/* Item 2 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <div className="relative h-full">
            <img
            //this is the background image
              src={bannerImg}
              className="absolute block w-full h-full object-cover"
              alt="..."
            />
            <div className='absolute top-0 left-0 m-10 p-10 border-[1px] bg-black bg-opacity-50 border-white rounded-xl flex justify-between items-center'>
                <div className='w-[30%] p-10 flex justify-center items-center'>
                    <img src={bannerImg} className='w-[100px] h-[100px]' alt=""/>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='text-[2rem] text-white font-bold'>Anonymous</h1>
                    <p className='text-[1.2rem] font-light text-white w-[90%]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum rem eos, inventore voluptas ullam sit eum fugit dignissimos adipisci reiciendis itaque nihil quasi quo laborum qui magnam dolor. Nihil unde non, iusto perspiciatis magnam, sunt sit error itaque ipsa iure fuga ipsum numquam voluptate cumque repellendus dicta vel quasi.
                    </p>
                </div>
            </div>
          </div>
          </div>
        {/* Item 3 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <div className="relative h-full">
            <img
            //this is the background image
              src={bannerImg}
              className="absolute block w-full h-full object-cover"
              alt="..."
            />
            <div className='absolute top-0 left-0 m-10 p-10 border-[1px] bg-black bg-opacity-50 border-white rounded-xl flex justify-between items-center'>
                <div className='w-[30%] p-10 flex justify-center items-center'>
                    <img src={bannerImg} className='w-[100px] h-[100px]' alt=""/>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='text-[2rem] text-white font-bold'>Anonymous</h1>
                    <p className='text-[1.2rem] font-light text-white w-[90%]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum rem eos, inventore voluptas ullam sit eum fugit dignissimos adipisci reiciendis itaque nihil quasi quo laborum qui magnam dolor. Nihil unde non, iusto perspiciatis magnam, sunt sit error itaque ipsa iure fuga ipsum numquam voluptate cumque repellendus dicta vel quasi.
                    </p>
                </div>
            </div>
          </div>
          </div>
        {/* Item 4 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <div className="relative h-full">
            <img
            //this is the background image
              src={bannerImg}
              className="absolute block w-full h-full object-cover"
              alt="..."
            />
            <div className='absolute top-0 left-0 m-10 p-10 border-[1px] bg-black bg-opacity-50 border-white rounded-xl flex justify-between items-center'>
                <div className='w-[30%] p-10 flex justify-center items-center'>
                    <img src={bannerImg} className='w-[100px] h-[100px]' alt=""/>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='text-[2rem] text-white font-bold'>Anonymous</h1>
                    <p className='text-[1.2rem] font-light text-white w-[90%]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum rem eos, inventore voluptas ullam sit eum fugit dignissimos adipisci reiciendis itaque nihil quasi quo laborum qui magnam dolor. Nihil unde non, iusto perspiciatis magnam, sunt sit error itaque ipsa iure fuga ipsum numquam voluptate cumque repellendus dicta vel quasi.
                    </p>
                </div>
            </div>
          </div>
          </div>
        {/* Item 5 */}
        <div className="block duration-700 ease-in-out" data-carousel-item>
          <div className="relative h-full">
            <img
            //this is the background image
              src={bannerImg}
              className="absolute block w-full h-full object-cover"
              alt="..."
            />
            <div className='absolute top-0 left-0 m-10 p-10 border-[1px] bg-black bg-opacity-50 border-white rounded-xl flex justify-between items-center'>
                <div className='w-[30%] p-10 flex justify-center items-center'>
                    <img src={bannerImg} className='w-[100px] h-[100px]' alt=""/>
                </div>
                <div className='flex flex-col gap-2 justify-center items-start'>
                    <h1 className='text-[2rem] text-white font-bold'>Anonymous</h1>
                    <p className='text-[1.2rem] font-light text-white w-[90%]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nostrum rem eos, inventore voluptas ullam sit eum fugit dignissimos adipisci reiciendis itaque nihil quasi quo laborum qui magnam dolor. Nihil unde non, iusto perspiciatis magnam, sunt sit error itaque ipsa iure fuga ipsum numquam voluptate cumque repellendus dicta vel quasi.
                    </p>
                </div>
            </div>
          </div>
          </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
