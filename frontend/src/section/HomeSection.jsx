import React from 'react'
import {
  Header,
  HomeSectionIntro,
  HomeSectionProfile,
  HomeSectionSkillsAndExperience,
  NavigationBar
} from '../components'


const HomeSection = () => {
  return (

    <div className='flex justify-between gap-10 mx-4 mt-20'>
      <div className='h-full hidden md:block '>
        <NavigationBar />
      </div>
      <div className='flex flex-col  gap-8 items-center'>
        <h1 className='text-Brand1 text-7xl hidden'>Developer</h1>
        <div className='flex flex-col xl:flex-row  gap-10 items-center justify-center'>
          <HomeSectionProfile />
          <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
            <HomeSectionIntro />
            <HomeSectionSkillsAndExperience />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSection
