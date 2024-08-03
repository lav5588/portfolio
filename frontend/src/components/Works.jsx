import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    title: "Event Booking and Management System",
    image: 'works-event-image.png',
    url: `https://event-booking-and-management-system.onrender.com`,
  },
  {
    title: "Real-time Chat Application",
    image: 'works-chat-image.png',
    url: `https://real-time-chat-1-ss9t.onrender.com`,
  },


];

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
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

    <div className=" flex gap-5  justify-center items-center">
      <button
        onClick={handleBack}
        className="bg-BG2 p-3 rounded-[50%]"
      >
        <FaChevronLeft className='text-White text-xl ' />
      </button>
      {
        slides.map((slide, index) =>
          currentSlide === index ? (
            <div key={index}>
              <h1 className='text-xl text-Brand1 text-center'>{slide.title}</h1>
              <div className="relative" >
                <img src="Dual-screen.svg" alt="dual screen" className='' />
                <img src="Web 1.svg" alt="" className='absolute top-[13%] left-[-3.8%] h-[106%]' />
                <img
                  src={`${slide.image}`}
                  className={`z-20 absolute top-[30%] left-[46.8%] h-[40%] ${isZoomed ? "scale-[3]" : ""}`}
                  onClick={handleZoom}
                />
                <a href={slide.url}
                  alt={slide.title}
                  target='_blank'
                  className=' absolute top-[10%] right-[10%] text-[0.7rem] underline decoration-White text-Brand1 sm:text-2xl md:text-3xl lg:text-4xl'>Visit Website</a>
              </div>
            </div>
          ) : null
        )
      }
      {/* <div className='relative'>
          <img src="Dual-screen.svg" alt="dual screen" className='' />
          <img src="Web 1.svg" alt="" className='absolute top-[13%] left-[-3.8%] h-[106%]' />
          <img src="image.png" alt="" className='absolute top-[31%] left-[46.9%] h-[39%]' />
          <a href="#" className='absolute top-[10%] right-[10%] text-[0.7rem] underline decoration-White text-Brand1 sm:text-2xl md:text-3xl lg:text-4xl'>Visit Website</a>
    
        </div> */}
      <button
        onClick={handleNext}
        className="bg-BG2 p-3 rounded-[50%]"
      >
        <FaChevronRight className='text-White text-xl ' />
      </button>
    </div>


  );
};

export default Works;
