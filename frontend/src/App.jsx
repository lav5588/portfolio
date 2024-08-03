import React from 'react'
import {
  Footer,
  Header,
} from './components'
import { AboutMeSection, ContactSection, HomeSection, SkillsSection, WorksSection } from './section'
import BgAnimation from './components/BgAnimation'

const App = () => {
  return (
    <div className='min-w-96'>


      <div>
        <Header />
        <div className='h-[0.01rem] bg-BG2 w-[80%] mx-auto'></div>

      </div>
      <div className=" xl:min-h-[100vh] " id='home'>

        <HomeSection />
        {/* <div className='absolute bottom-0 h-full w-full'>
          <BgAnimation />
        </div> */}


      </div>
      <div className=" xl:min-h-[100vh]  bg-aboutMeBgImage relative" id='about'>
        <AboutMeSection />

      </div>
      <div className=" xl:min-h-[100vh] bg-skillsBgImage" id='skills'>

        <SkillsSection />
      </div>
      <div className="xl:min-h-[100vh] bg-worksBgImage" id='works'>

        <WorksSection />
      </div>
      <div className="  bg-BG2" id='contact'>

        <ContactSection />
      </div>
      <div id="footer">
        <Footer />

      </div>

    </div>
  )
}

export default App
