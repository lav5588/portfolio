import React, { useRef } from 'react'
import { MdGridView } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { PiCodeSimpleBold } from "react-icons/pi";
import { LuMonitor } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import MaterialPopover from './MaterialPopover';

const NavigationBar = ({id='menu'}) => {
    const menuBtnRef = useRef();
    const aboutMeBtnRef = useRef();
    const skillsBtnRef = useRef();
    const worksBtnRef = useRef();
    const blogsBtnRef = useRef();
    const contactBtnRef = useRef();
    const selectedStyle = {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderRadius: '50%',
        padding: '8px'
    }
    return (
        <div className='bg-BG2 flex flex-col  gap-5 justify-center items-center py-4 w-14  text-3xl rounded-full text-White'>
            <div   ref={menuBtnRef} style={id=='menu'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2" >
                <a href="#home">
                    <MdGridView />
                </a>
            </div  >
            <div    style={id=='about'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2">
                <a href="#about" ref={aboutMeBtnRef}>
                    <FiUser />
                </a>
                <MaterialPopover btnRef={aboutMeBtnRef} eventType='mouseover'>About Me</MaterialPopover>
            </div>
            <div ref={skillsBtnRef}   style={id=='skills'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2">
                <a href="#skills">
                    <PiCodeSimpleBold />
                </a>
                <MaterialPopover btnRef={skillsBtnRef} eventType='mouseover'>Skills</MaterialPopover>
            </div>
            <div ref={worksBtnRef}   style={id=='works'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2">
                <a href="#works">
                    <LuMonitor />
                </a>
                <MaterialPopover btnRef={worksBtnRef} eventType='mouseover'>Works</MaterialPopover>
            </div>
            {/* <div ref={blogsBtnRef}   style={id=='blogs'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2">
                <a href="#home">
                    <FiEdit />
                </a>
                <MaterialPopover btnRef={blogsBtnRef} eventType='mouseover'>Blogs</MaterialPopover>
            </div> */}
            <div ref={contactBtnRef}   style={id=='contact'?selectedStyle:{}} className="cursor-pointer hover:text-black hover:bg-white rounded-[50%] p-2">
                <a href="#contact">
                    <MdOutlineMail />
                </a>
                <MaterialPopover btnRef={contactBtnRef} eventType='mouseover'>Contact</MaterialPopover>
            </div>
        </div>
    )
}

export default NavigationBar
