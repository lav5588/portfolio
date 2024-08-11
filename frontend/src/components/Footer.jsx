import { FaInstagram } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="flex justify-between items-center py-4  flex-col-reverse lg:flex-row gap-5 lg:mx-16 ">
            <div className="flex justify-between items-center flex-col md:flex-row gap-5 lg:basis-[60vw]">
                <div className="text-White text-xs sm:text-sm">
                    <p>&#169; 2024 Lav Kumar Yadav &nbsp;&nbsp;All rights reserved.</p>
                </div>
                <div className="text-White text-xs sm:text-sm">
                    <a href="#" className="mr-3">Privacy Policy</a>
                    <a href="#" className="ml-3">Terms & Conditions</a>
                </div>
            </div>
            <div>
                <div className="flex gap-4 justify-center items-center  ">
                    <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="https://www.instagram.com/the_lav_kumar/" className="">
                            <FaInstagram className='text-3xl' />
                        </a>
                    </div>
                    <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="https://x.com/LavKuma65537724" className="">
                            <RiTwitterXLine className='text-3xl' />
                        </a>
                    </div>
                    {/* <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="#">
                            <AiOutlineDiscord className='text-3xl ' />
                        </a>
                    </div> */}
                    <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="https://www.linkedin.com/in/lav-kumar-yadav-b26853223/">
                            <FaLinkedinIn className='text-3xl ' />
                        </a>
                    </div>
                    <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="https://leetcode.com/u/Lav5588/">
                            <SiLeetcode className='text-3xl ' />
                        </a>
                    </div>
                    <div className="bg-Brand1 h-10 w-10 flex justify-center items-center rounded-[50%]">
                        <a href="https://github.com/lav5588">
                            <FaGithub className='text-3xl ' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
