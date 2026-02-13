import React from 'react'
import Choose from './Choose'

export default function PaymentMethod() {
  return (
    <div className='p-10 bg-[#FFFFFF] border border-[#22222233] rounded-3xl flex flex-col justify-center gap-10 items-start'>
        <h1 className='font-semibold text-[18px] text-[#222222]'>Payment Method</h1>
        <Choose/>
    </div>
  )
}
