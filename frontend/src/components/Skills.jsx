import { LuMonitor } from "react-icons/lu";
import { ImHtmlFive2 } from "react-icons/im";
import { IoLogoCss3 } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { LiaReact } from "react-icons/lia";
import { TbBrandNodejs, TbBrandCpp } from "react-icons/tb";
import { SiExpress, SiC, SiPostman, SiLeetcode } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaPython, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { TbBrandNextjs } from "react-icons/tb";

const skillsData = [
    {
        name: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        bgColor: "bg-Html",
        textColor: "text-Html",
        icon: <ImHtmlFive2 />,
    },
    {
        name: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        bgColor: "bg-CSS",
        textColor: "text-CSS",
        icon: <IoLogoCss3 />,
    },
    {
        name: "JS",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        bgColor: "bg-JS",
        textColor: "text-JS",
        icon: <AiOutlineJavaScript />,
    },
    {
        name: "React",
        link: "https://react.dev/",
        bgColor: "bg-REACT",
        textColor: "text-REACT",
        icon: <LiaReact />,
    },
    {
        name: "Node",
        link: "https://nodejs.org/docs/latest/api/",
        bgColor: "bg-Node",
        textColor: "text-Node",
        icon: <TbBrandNodejs />,
    },
    {
        name: "Next",
        link: "https://expressjs.com/",
        bgColor: "bg-Next",
        textColor: "text-white",
        icon: <TbBrandNextjs />,
    },
    {
        name: "Express",
        link: "https://expressjs.com/",
        bgColor: "bg-Express",
        textColor: "text-Express",
        icon: <SiExpress />,
    },
    {
        name: "Tailwind",
        link: "https://tailwindcss.com/",
        bgColor: "bg-Tailwind",
        textColor: "text-Tailwind",
        icon: <RiTailwindCssFill />,
    },
    {
        name: "Mongo",
        link: "https://www.mongodb.com/docs/",
        bgColor: "bg-MongoDB",
        textColor: "text-MongoDB",
        icon: <DiMongodb />,
    },
    {
        name: "C",
        link: "https://learn.microsoft.com/en-us/cpp/c-language/c-language-reference?view=msvc-170",
        bgColor: "bg-C",
        textColor: "text-C",
        icon: <SiC />,
    },
    {
        name: "C++",
        link: "https://learn.microsoft.com/en-us/cpp/?view=msvc-170",
        bgColor: "bg-C++",
        textColor: "text-C++",
        icon: <TbBrandCpp />,
    },
    {
        name: "Python",
        link: "https://docs.python.org/3/",
        bgColor: "bg-Python",
        textColor: "text-Python",
        icon: <FaPython />,
    },
    {
        name: "Git",
        link: "https://git-scm.com/",
        bgColor: "bg-Git",
        textColor: "text-Git",
        icon: <FaGitAlt />,
    },
    {
        name: "GitHub",
        link: "https://docs.github.com/en/get-started",
        bgColor: "bg-GitHub",
        textColor: "text-White",
        icon: <FaGithub />,
    },
    {
        name: "Postman",
        link: "https://www.postman.com/",
        bgColor: "bg-Postman",
        textColor: "text-Postman",
        icon: <SiPostman />,
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        bgColor: "bg-Docker",
        textColor: "text-Docker",
        icon: <FaDocker />,
    },
    {
        name: "Linux",
        link: "https://www.kernel.org/doc/html/v4.10/index.html",
        bgColor: "bg-white",
        textColor: "text-white",
        icon: <FcLinux />,
    },
    {
        name: "Problem Solving",
        link: "https://leetcode.com/u/lav5588/",
        bgColor: "bg-LeetCode",
        textColor: "text-LeetCode",
        icon: <SiLeetcode />,
    },
];

const Skills = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="flex justify-center items-center">
                <div className="flex flex-col items-center border border-4 rounded-md border-Brand2 bg-Brand2 p-5">
                    <LuMonitor />
                    <h1>Web Development</h1>
                    <p className="flex justify-center items-center">HTML, CSS, JS, React</p>
                    <p className="flex justify-center items-center">Node, Express, Tailwind, Mongo</p>
                    <p className="flex justify-center items-center">C, C++, Python, Git</p>
                    <p className="flex justify-center items-center">GitHub, Postman, Docker</p>
                    <p className="flex justify-center items-center">Linux, Problem Solving</p>
                </div>
            </div>
            <div className="text-White flex flex-wrap gap-10 justify-center items-center lg:max-w-[67%]">
                {skillsData.map((skill, index) => (
                    <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col justify-center items-center">
                            <div className={`${skill.bgColor} sm:text-3xl xl:text-5xl rounded-[50%] p-4`}>
                                {skill.icon}
                            </div>
                            <h1 className={`${skill.textColor} sm:text-xl`}>{skill.name}</h1>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Skills;
