import { FaInstagram } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import MaterialPopover from "./MaterialPopover";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const searchBtnRef = useRef();

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const headerVisible = prevScrollPos > currentScrollPos;
    setVisible(headerVisible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div style={{ top: visible ? '0' : '-7.2rem', transition: 'top 0.3s' }} className=' fixed top-0 left-0 right-0 z-30  bg-BG1 text-White flex justify-between px-2 sm:px-5 md:px-8 lg:px-10 xl:px-15 2xl:px-20 py-2'>
      <div><span className='text-Brand1'>&lt;C/&gt;&nbsp;&nbsp;&nbsp;</span>
        <span>LAV&nbsp;</span>
        <span className="hidden sm:inline">KUMAR&nbsp;</span>
        <span className="hidden sm:inline">YADAV&nbsp;</span>
      </div>
      <div className='flex justify-center gap-6 '>
        {/* <div className='flex justify-center gap-6  '>
          <a href='/' className='hover:text-Brand1'>Home</a>
          <a href='#' className='hover:text-Brand1 '>Blogs</a>
        </div> */}
        {/* <div className="xl:relative flex justify-center items-center">
          <input type="text" className='hidden xl:block rounded-full xl:text-[#000000] px-3 pr-7' placeholder="Search All" />
          <FiSearch className="hidden xl:block xl:absolute xl:right-2 top-1 xl:text-[#000000]" />
          <div ref={searchBtnRef}>
            {isOpen ? <RxCross2 className="xl:hidden" /> : <FiSearch className="xl:hidden cursor-pointer" />}
          </div>
          <MaterialPopover btnRef={searchBtnRef} toggleMenu={toggleMenu}><input type="text" className="px-3 h-10  " placeholder="Search All" /></MaterialPopover>
        </div> */}
        <div className='hidden mobile:flex justify-center gap-6'>
          <a href='https://www.instagram.com/the_lav_kumar/' target="_blank" className="flex justify-center items-center gap-2">
            <FaInstagram className=" text-Brand1" />
            <span className="hidden md:block ">Instagram</span>
          </a>
          {/* <a href='#' className="flex justify-center items-center gap-2">
            <AiOutlineDiscord className=" text-Brand1" />
            <span className="hidden md:block ">Discord</span>
          </a> */}
          <a href='https://www.linkedin.com/in/lav-kumar-yadav-b26853223/' target="_blank" className="flex justify-center items-center gap-2">
            <FaLinkedinIn className=" text-Brand1" />
            <span className="hidden md:block ">LinkedIn</span>
          </a>
          <a href='https://leetcode.com/u/Lav5588/' target="_blank" className="flex justify-center items-center gap-2">
            <SiLeetcode className=" text-Brand1" />
            <span className="hidden md:block ">LeetCode</span>
          </a>
          <a href='https://github.com/lav5588' target="_blank" className="flex justify-center items-center gap-2">
            <FaGithub className=" text-Brand1" />
            <span className="hidden md:block ">Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
