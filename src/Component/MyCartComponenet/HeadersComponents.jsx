import React from 'react'

export default function HeadersComponents() {
  return (
   <div className="hidden h-7 lg:grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr_40px] px-5 py-8 pb-12 text-[20px] font-semibold text-[#000000]">
        <div>Item</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Price</div>
        <div className="text-center">Total Price</div>
        <div className="text-center">Delet</div>
      </div>
  )
}
