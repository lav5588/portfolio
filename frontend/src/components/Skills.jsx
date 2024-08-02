import { LuMonitor } from "react-icons/lu";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";
import { LuDot } from "react-icons/lu";
import { TbBrandNodejs } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { SiC } from 'react-icons/si';
import { FaPython } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";



const Skills = () => {
    return (
        <div className=' flex flex-col gap-10 justify-center items-center'>
            <div className="flex justify-center items-center">
                <div className="flex justify-center flex-col items-center border border-l-REACT border-4 rounded-md border-Brand2 bg-Brand2 p-5">
                    <LuMonitor />
                    <h1>Web Developement</h1>
                    <p className="flex justify-center items-center">HTML<LuDot />CSS<LuDot />js<LuDot />React</p>
                    <p className="flex justify-center items-center">Node<LuDot />Express<LuDot />Tailwind<LuDot />Mongo</p>
                    <p className="flex justify-center items-center">C<LuDot />C++<LuDot />Python<LuDot />GitHub</p>
                    <p className="flex justify-center items-center">Postman<LuDot />Problem Solving</p>
                </div>
            </div>
            <div className="text-White flex flex-wrap gap-10 justify-center items-center lg:max-w-[67%]">
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Html text-7xl rounded-[50%] p-4">
                        <ImHtmlFive2 />
                    </div>
                    <h1 className="text-Html text-2xl">HTML</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-CSS text-7xl rounded-[50%] p-4">
                        <IoLogoCss3 />
                    </div>
                    <h1 className="text-CSS text-2xl">CSS</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-JS text-7xl rounded-[50%] p-4">
                        <AiOutlineJavaScript />
                    </div>
                    <h1 className="text-JS text-2xl">JS</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-REACT text-7xl rounded-[50%] p-4">
                        <LiaReact />
                    </div>
                    <h1 className="text-REACT text-2xl">REACT</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Node text-7xl rounded-[50%] p-4">
                        <TbBrandNodejs />
                    </div>
                    <h1 className="text-Node text-2xl">Node</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Express text-7xl rounded-[50%] p-4">
                        <SiExpress />
                    </div>
                    <h1 className="text-Express text-2xl">Express</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Tailwind text-7xl rounded-[50%] p-4">
                        <RiTailwindCssFill />
                    </div>
                    <h1 className="text-Tailwind text-2xl">TailWind Css</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-MongoDB text-7xl rounded-[50%] p-4">
                        <DiMongodb />
                    </div>
                    <h1 className="text-MongoDB text-2xl">Mongo Db</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-C text-7xl rounded-[50%] p-4">
                        <SiC />

                    </div>
                    <h1 className="text-C text-2xl">C</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-C++ text-7xl rounded-[50%] p-4">
                        <TbBrandCpp />
                    </div>
                    <h1 className="text-C++ text-2xl">C++</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Python text-7xl rounded-[50%] p-4">
                        <FaPython />
                    </div>
                    <h1 className="text-Python text-2xl">Python</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-GitHub text-7xl rounded-[50%] p-4">
                        <FaGithub />
                    </div>
                    <h1 className="text-White text-2xl">GitHub</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-Postman text-7xl rounded-[50%] p-4">
                        <SiPostman />
                    </div>
                    <h1 className="text-Postman text-2xl">Postman</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-LeetCode text-7xl rounded-[50%] p-4">
                        <SiLeetcode />
                    </div>
                    <h1 className="text-LeetCode text-2xl">Problem Solving</h1>
                </div>
            </div>
        </div>
    )
}

export default Skills
