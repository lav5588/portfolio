import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiBriefcase3Line } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";

const HomeSectionProfile = () => {
    return (
        <div className=" text-White flex flex-col gap-7 border border-White  shadow-topShadow shadow-Brand1 border-4 justify-center items-center rounded-tl-[10rem] rounded-br-[10rem]  p-8">
            <div className="flex flex-col justify-center items-center gap-2">
                <img src="lav.jpeg" alt="" className="h-24 rounded-[50%] w-24 border border-4 border-Brand1" />
                <div>
                    <h1 className="text-3xl">LAV KUMAR</h1>
                    <p>Full-stack developer</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">

                <div className="flex gap-2 items-center">
                    <MdOutlineMail />
                    <p>lavkumar3000@gmail.com</p>
                </div>
                <div className="flex gap-2 items-center">
                    <FaWhatsapp />
                    <p>+91 6392737953</p>
                </div>
                <div className="flex gap-2 items-center">
                    <CiLocationOn />
                    <p>Ghaziabad</p>
                </div>
                <div className="flex gap-2 items-center">
                    <RiBriefcase3Line />
                    <p>Full-stack / Student</p>
                </div>
                
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">HTML</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">CSS</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">JS</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">REACT</h1>
                </div>
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Node</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Express</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Tailwind</h1>
                </div>
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Mongo</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">C</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">C++</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Python</h1>
                </div>
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Git</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">GitHub</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Postman</h1>
                </div>
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Docker</h1>
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Linux</h1>
                    
                </div>
                <div className="flex gap-4 justify-center">
                    <h1 className="bg-Brand1 rounded-3xl text-black px-2">Problem Solving</h1>
                </div>
            </div>
            <Button className="bg-White text-[#000000]">
                <a  href="https://drive.google.com/file/d/1N7tF0w_1bocWnFw5irLmZUUVzH2K2hHm/view?usp=drivesdk" target="_blank">Download Resume<MdOutlineFileDownload className="inline" /></a>
            </Button>
        </div>
    )
}

export default HomeSectionProfile
