import React, { useEffect, useRef, useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const PressRelease = () => {
    const prAPI = [
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 2",
            image: "https://hridc.co.in/img/HRIDC-PR-Report1.jpg", 
        },
        {
            title: "Press Release 3",
            image: "https://hridc.co.in/img/pressssss--13.jpg", 
        },
        {
            title: "Press Release 1",
            image: "https://hridc.co.in/img/press-nov--02.jpg", 
        },
    ];

    const [visiblePR, setVisiblePR] = useState(6);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visiblePR < prAPI.length) {
                    setVisiblePR((prev) => Math.min(prev + 3, prAPI.length));
                }
            },
            { threshold: 1.0 }
        );

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        };
    }, [visiblePR, prAPI.length]);


    
  return (
    <div className='my-10'>
        <div className='w-full flex justify-center items-center'>
            <h1 className='text-[2rem] font-poppins font-bold mb-8 text-[#19155e]'>Press Release</h1>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-x-[2%]'>
            {
                prAPI.slice(0,visiblePR).map((item, index) => (
                    <div data-aos="fade-zoom-in" className='w-[30%] rounded-md h-[300px] overflow-hidden mt-[2%]'>
                        <img className='h-full w-full' src={item.image} alt="" />
                    </div>
                ))
            }
        </div>
        <div ref={loadMoreRef} className='h-10 w-full'></div>
    </div>
  )
}

export default PressRelease