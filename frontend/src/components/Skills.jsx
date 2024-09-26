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
import { FaDocker, FaGitAlt, FaGithub } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FcLinux } from "react-icons/fc";



const Skills = () => {
    return (
        <div className=' flex flex-col gap-10 justify-center items-center'>
            <div className="flex justify-center items-center">
                <div className="flex justify-center flex-col items-center border border-l-REACT border-4 rounded-md border-Brand2 bg-Brand2 p-5">
                    <LuMonitor />
                    <h1>Web Developement</h1>
                    <p className="flex justify-center items-center">HTML<LuDot />CSS<LuDot />js<LuDot />React</p>
                    <p className="flex justify-center items-center">Node<LuDot />Express<LuDot />Tailwind<LuDot />Mongo</p>
                    <p className="flex justify-center items-center">C<LuDot />C++<LuDot />Python<LuDot />Git</p>
                    <p className="flex justify-center items-center">GitHub<LuDot />Postman<LuDot />Docker</p>
                    <p className="flex justify-center items-center">Linux<LuDot />Problem Solving</p>
                </div>
            </div>
            <div className="text-White flex flex-wrap gap-10 justify-center items-center lg:max-w-[67%]">
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Html sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <ImHtmlFive2 />
                        </div>
                        <h1 className="text-Html sm:text-xl">HTML</h1>
                    </div>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-CSS sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <IoLogoCss3 />
                        </div>
                        <h1 className="text-CSS sm:text-xl">CSS</h1>
                    </div>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-JS sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <AiOutlineJavaScript />
                        </div>
                        <h1 className="text-JS sm:text-xl">JS</h1>
                    </div>
                </a>
                <a href="https://react.dev/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-REACT sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <LiaReact />
                        </div>
                        <h1 className="text-REACT sm:text-xl">REACT</h1>
                    </div>
                </a>
                <a href="https://nodejs.org/docs/latest/api/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Node sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <TbBrandNodejs />
                        </div>
                        <h1 className="text-Node sm:text-xl">Node</h1>
                    </div>
                </a>
                <a href="https://expressjs.com/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Express sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <SiExpress />
                        </div>
                        <h1 className="text-Express sm:text-xl">Express</h1>
                    </div>
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Tailwind sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <RiTailwindCssFill />
                        </div>
                        <h1 className="text-Tailwind sm:text-xl">TailWind</h1>
                    </div>
                </a>
                <a href="https://www.mongodb.com/docs/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-MongoDB sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <DiMongodb />
                        </div>
                        <h1 className="text-MongoDB sm:text-xl">Mongo</h1>
                    </div>
                </a>
                <a href="https://learn.microsoft.com/en-us/cpp/c-language/c-language-reference?view=msvc-170" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-C sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <SiC />

                        </div>
                        <h1 className="text-C sm:text-xl">C</h1>
                    </div>
                </a>
                <a href="https://learn.microsoft.com/en-us/cpp/?view=msvc-170" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-C++ sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <TbBrandCpp />
                        </div>
                        <h1 className="text-C++ sm:text-xl">C++</h1>
                    </div>
                </a>
                <a href="https://docs.python.org/3/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Python sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <FaPython />
                        </div>
                        <h1 className="text-Python sm:text-xl">Python</h1>
                    </div>
                </a>
                <a href="https://git-scm.com/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Git sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                        <FaGitAlt />
                        </div>
                        <h1 className="text-Git sm:text-xl">Git</h1>
                    </div>
                </a>
                <a href="https://docs.github.com/en/get-started" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-GitHub sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <FaGithub />
                        </div>
                        <h1 className="text-White sm:text-xl">GitHub</h1>
                    </div>
                </a>
                <a href="https://www.postman.com/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Postman sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <SiPostman />
                        </div>
                        <h1 className="text-Postman sm:text-xl">Postman</h1>
                    </div>
                </a>
                <a href="https://www.docker.com/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-Docker sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <FaDocker />
                        </div>
                        <h1 className="text-Docker sm:text-xl">Docker</h1>
                    </div>
                </a>
                <a href="https://www.kernel.org/doc/html/v4.10/index.html" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-white sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <FcLinux  />
                        </div>
                        <h1 className="text-white sm:text-xl">Linux</h1>
                    </div>
                </a>
                <a href="https://leetcode.com/u/lav5588/" target="_blank">
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-LeetCode sm:text-3xl xl:text-5xl rounded-[50%] p-4">
                            <SiLeetcode />
                        </div>
                        <h1 className="text-LeetCode sm:text-xl">Problem Solving</h1>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Skills
