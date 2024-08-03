import React from 'react'
import { Aboutme, ModuleTitle } from '../components'

const AboutMeSection = () => {
  return (
    <div className='mx-2 md:mx-10 lg:mx-40 py-12'>
      <div className='hidden lg:block'>

        <ModuleTitle />

      </div>
      <div>
        <Aboutme />
      </div>
    </div>
  )
}

export default AboutMeSection
