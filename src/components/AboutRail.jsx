import React from 'react'

const AboutRail = () => {
  return (
    <div className='flex md:flex-row flex-col h-[80vh] p-20 justify-between gap-10 bg-[#224e9d]'>
        <div className='flex flex-col gap-2 items-start'>
            <h1 className='text-[3rem] font-bold text-white'>ABOUT HARYANA RAIL</h1>
            <p className='max-w-[80%] text-[1.2rem] font-light text-white'>The Haryana Rail Infrastructure Development Corporation (HRIDC) is dedicated to enhancing the rail infrastructure across Haryana. HRIDC aims to develop high-quality, efficient, and safe railway networks, connecting urban and rural areas, including underserved regions. This initiative is designed to boost economic growth, improve transportation logistics, and enhance regional connectivity, thereby fostering socio-economic development. By prioritizing sustainable and modern railway solutions, HRIDC strives to create a seamless and reliable rail system, promoting mobility and accessibility for all residents of Haryana. The corporation’s vision is to transform Haryana into a hub of advanced rail infrastructure, contributing significantly to the state's development.</p>
            <button className=' border-[1px] border-white px-4 py-2 text-[1rem] rounded-xl mt-8 text-white'>READ MORE</button>
        </div>
        <div className='flex flex-col justify-center'>
            <img className='rounded-xl' src='https://via.placeholder.com/1500'/>
        </div>
    </div>
  )
}

export default AboutRail