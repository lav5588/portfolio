import React from 'react'
import { MdOutlineMail } from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

const HomeSectionIntro = () => {
    return (
        <div className='text-White flex flex-col gap-16 items-center '>
            <div>

                <h1 className='text-2xl sm:text-5xl'>Hey</h1>
                <h1 className='text-2xl sm:text-5xl'>I'm&nbsp;
                    <span className='text-Brand1'>Lav,</span>
                </h1>
                <h1 className='text-2xl sm:text-5xl'>
                    <Typewriter
                        options={{
                            strings: ['Full-Stack Developer',
                                'MERN Stack Developer',
                                'JavaScript Developer',
                                'Frontend & Backend Developer',
                                'Clean Coder',
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <div className='mt-12'>
                    <p className='text-balence text-sm sm:text-xl'>I am passionate about creating engaging web experiences and skilled in building full stack applications. If you're looking for a developer who is eager to learn and deliver impactful solutions, I'm here to help.</p>
                    <p className='text-3xl text-Brand1 flex gap-5'>Let's talk
                        <a href="mailto:lavkumar3000@gmail.com" ><MdOutlineMail className='inline' /></a>
                        <a href="https://wa.me/+916392737953" target='_blank'><FaWhatsapp className='inline' /></a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeSectionIntro
