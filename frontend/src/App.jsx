import React from 'react'
import {
  Footer,
  Header,
} from './components'
import { AboutMeSection, ContactSection, HomeSection, SkillsSection, WorksSection } from './section'
import BgAnimation from './components/BgAnimation'

const App = () => {
  return (
    <div className='my-5'>


      <div>
        <Header />
        <div className='h-[0.01rem] bg-BG2 w-[80%] mx-auto mt-4'></div>

      </div>
      <div className="min-h-[100vh] relative  " id='home'>

        <HomeSection />
        {/* <div className='absolute bottom-0 h-full w-full'>
          <BgAnimation />
        </div> */}


      </div>
      <div className="min-h-[100vh]  bg-aboutMeBgImage relative" id='about'>
        <AboutMeSection />

      </div>
      <div className="min-h-[100vh]  bg-skillsBgImage" id='skills'>

        <SkillsSection />
      </div>
      <div className="min-h-[110vh]  bg-worksBgImage" id='works'>

        <WorksSection />
      </div>
      <div className="min-h-[100vh]  bg-BG2" id='contact'>

        <ContactSection />
      </div>
      <div id="footer" className='mt-4'>
        <Footer />

      </div>

    </div>
  )
}

export default App
