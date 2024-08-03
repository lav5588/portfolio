import React from 'react'
import { Contact, ModuleTitle } from '../components'

const ContactSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mx-2 py-12'>
      <div>
        <a href="#footer">
          <ModuleTitle title="Contact" />
        </a>
        <p className='text-white text-center'>I’m currently available for freelance work</p>
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default ContactSection
