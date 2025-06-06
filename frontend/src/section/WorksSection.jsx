import {
  ModuleTitle,
  Works,
} from "../components"

const WorksSection = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-20 mx-2 py-12">
      <div>

        <ModuleTitle title="Projects" />

        <p className="text-white text-center">I had the pleasure of working with these awesome projects</p>
      </div>
      <div>
        <Works />
      </div>
    </div>
  )
}

export default WorksSection
