import React from 'react'

const AboutRail = () => {
  return (
    <div className='flex md:flex-row flex-col h-[80vh] p-20 justify-between gap-10 bg-[#224e9d]'>
        <div className='flex flex-col gap-2 items-start'>
            <h1 className='text-[3rem] font-bold text-white'>ABOUT HARYANA RAIL</h1>
            <p className='max-w-[80%] text-[1.2rem] font-light text-white'>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youmany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, byinjected humour, or randomised words which don't look even slightly believable. If you</p>
            <button className=' border-2 border-white p-4 text-[1.1rem] rounded-xl mt-8 text-white'>READ MORE</button>
        </div>
        <div className='flex flex-col justify-center'>
            <img className='rounded-xl' src='https://via.placeholder.com/1500'/>
        </div>
    </div>
  )
}

export default AboutRail