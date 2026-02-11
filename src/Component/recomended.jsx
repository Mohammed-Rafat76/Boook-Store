import React from 'react'
import RecomendedCard from './recomendedCard'

export default function Recomended() {
  return (
    <div className='bg-[#F5F5F5] py-30 lg:px-15 px-5 flex flex-col justify-center items-start gap-10'>
        <h1 className='font-bold text-[26px] text-[#222222]'>Recomended For You</h1>
        <div className='flex flex-col xl:flex-row justify-center items-center gap-6'>
            <RecomendedCard/>
            <RecomendedCard/>
        </div>
    </div>
  )
}
