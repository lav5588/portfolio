import React from 'react'

const ModuleTitle = ({ className, title }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center gap-10`}>
            <img src="Scroll.svg" className='h-[6rem] hidden md:block' alt="mouse Scroll" />
            {title && <div>
                <h2 className=' text-center text-5xl font-bold text-Brand1'>{title}</h2>
                <div className='flex justify-center items-center'>
                    <div className='h-3 bg-Brand1 w-3 rounded-[50%]'></div>
                    <div className={`h-[2px] bg-Brand1 w-36`}></div>
                    <div className='h-3 bg-Brand1 w-3 rounded-[50%]'></div>

                </div>
            </div>}
        </div>
    )
}

export default ModuleTitle
