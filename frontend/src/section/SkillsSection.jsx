import { ModuleTitle, Skills } from "../components"
import { FaCode } from "react-icons/fa6";

const SkillsSection = () => {
    return (
        <div className="mx-3 flex flex-col gap-10 relative py-12">
            <div>
                <a href="#works">
                    <ModuleTitle title="Skills" />
                </a>
            </div>
            <div className="text-white flex justify-center items-center text-center">
                <p>I am striving to never stop learning and improving</p>
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <FaCode className="text-Brand1 hidden md:block text-9xl absolute right-[12%] top-[1%]" />
            </div>
        </div>
    )
}

export default SkillsSection
