import React from 'react'


const Aboutme = () => {
  return (
    <div className='text-White flex flex-col md:flex-row justify-between  items-center gap-10 lg:gap-20'>
      <div className='flex flex-col justify-between  items-start md:items-start gap-5'>
        <h1 className='border border-[0.3rem] border-Brand1 inline-block  rounded-tl-[2.5rem] rounded-br-[2.5rem] bg-BG1 py-3 px-5 text-3xl sm:text-5xl flex justify-center items-center'>About Me</h1>
        <div className='bg-BG1 rounded-[2.5rem] p-4 text-sm sm:text-xl flex flex-col gap-5'>
          <h1 className='text-2xl xl:text-3xl text-Brand1'>Hello!</h1>
          <p>My name is Lav, and I am a full stack developer with expertise in <span className='text-Brand1'>HTML</span>, <span className='text-Brand1'>CSS</span>, <span className='text-Brand1'>JavaScript</span>, <span className='text-Brand1'>React</span>, <span className='text-Brand1'>Node.js</span>, <span className='text-Brand1'>Express</span>, <span className='text-Brand1'>MongoDB</span>, <span className='text-Brand1'>Tailwind</span>, <span className='text-Brand1'>GitHub</span>, and <span className='text-Brand1'>Postman</span>.</p>
          <p>I am passionate about building dynamic and user-friendly web applications. I thrive on writing clean, efficient code and am constantly seeking new ways to improve my skills and knowledge.</p>
          <p>Outside of coding, I enjoy listening to <span className='text-Brand1'>music</span> and <span className='text-Brand1'>inspirational stories</span>. I believe in challenging my perspectives to continually grow and see the world in new ways.</p>
        </div>

      </div>
      <div className='flex justify-center items-center'>
        <img src="lav.jpeg" alt="lav" className='w-[80%] xl:w-full rounded-2xl' />
      </div>
    </div>
  )
}

export default Aboutme
