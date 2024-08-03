import React from 'react'
import { LeetCode, ModuleTitle } from '../components'

const LeetCodeSection = () => {
  return (
    <div className='py-12'>
        <div className='pb-4'>
            <ModuleTitle title={"LeetCode"} />
        </div>
        <div>
            <LeetCode/>
        </div>
        <a href="https://leetcode.com/lav5588" target='_blank' className='block text-center pt-4 underline text-Brand1'>Visit Profile</a>
    </div>
  )
}

export default LeetCodeSection
