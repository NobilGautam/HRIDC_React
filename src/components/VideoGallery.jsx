import React, { useState, useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const VideoGallery = () => {
    const videos = [
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
        { link: "https://www.youtube.com/embed/NMkqtEEoN6U" },
    ];

    const [visibleVideos, setVisibleVideos] = useState(6);
    const loadMoreRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && visibleVideos < videos.length) {
                    setVisibleVideos((prev) => Math.min(prev + 3, videos.length));
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
    }, [visibleVideos, videos.length]);

    return (
        <div className='my-10'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='text-[2rem] font-poppins font-bold mb-8'>Video Gallery</h1>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-x-[2%]'>
                {
                    videos.slice(0, visibleVideos).map((video, index) => (
                        <iframe
                            data-aos="fade-zoom-in"
                            key={index}
                            width="560"
                            height="315"
                            src={video.link}
                            title={`YouTube video player ${index}`}
                            className='rounded-md my-[1%] w-[30%]'
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ))
                }
            </div>
            <div ref={loadMoreRef} className='h-10 w-full'></div>
        </div>
    );
};

export default VideoGallery;
