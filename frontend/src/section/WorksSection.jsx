import {
  ModuleTitle,
  Works,
} from "../components"

const WorksSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-2">
      <div>
        <a href="#contact">
          <ModuleTitle title="Works" />
        </a>
        <p className="text-white text-center">I had the pleasure of working with these awesome projects</p>
      </div>
      <div>
        <Works />
      </div>
    </div>
  )
}

export default WorksSection
