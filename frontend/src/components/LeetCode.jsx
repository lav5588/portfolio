import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
    {
        title: "30 November 2024",
        image: '/LeeCode/30-November-2024-Leetcode.webp',
    },
    {
        title: "30 September 2024",
        image: '/LeeCode/30-September-2024-Leetcode.webp',
    },
    {
        title: "31 August 2024",
        image: '/LeeCode/31-August-2024-Leetcode.webp',
    },
    {
        title: "31 July 2024",
        image: '/LeeCode/31-July-2024-Leetcode.png',
    },
    {
        title: "30 June 2024",
        image: '/LeeCode/30-June-2024-Leetcode.png',
    },
    {
        title: "31 May 2024",
        image: '/LeeCode/31-May-2024-Leetcode.png',
    },

];

const LeetCode = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const handleClick = () => {
        setIsZoomed(!isZoomed);
        if (!isZoomed) {
          document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
          document.body.style.overflow = 'auto'; // Enable scroll
        }
      };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handleBack = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (

        <div className={` flex px-12 justify-center items-center`}>
            <button
                onClick={handleBack}
                className="bg-BG2 p-3 rounded-[50%]"
            >
                <FaChevronLeft className='text-White text-xl ' />
            </button>
            {
                slides.map((slide, index) =>
                    currentSlide === index ? (
                        <div key={index} className='flex flex-col justify-center items-center gap-12'>
                            <h1 className='text-xl text-Brand1 text-center'>{slide.title}</h1>
                            <img src={slide.image} alt="31-july-2024-leetcode" className={`md:w-[50%] ${isZoomed?"scale-[2]":""}`}  onClick={handleClick} />
                        </div>
                    ) : null
                )
            }
           
            <button
                onClick={handleNext}
                className="bg-BG2 p-3 rounded-[50%]"
            >
                <FaChevronRight className='text-White text-xl ' />
            </button>
        </div>


    );
};

export default LeetCode;
