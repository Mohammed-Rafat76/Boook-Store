import Information from "./Information";


export default function ShippingInformation() {
  return (
    <div className='xl:p-10 lg:p-8 md:p-6 p-4 bg-[#FFFFFF] border border-[#22222233] rounded-3xl flex flex-col justify-center gap-10 items-start'>
        <h1 className='font-semibold text-[18px] text-[#222222]'>Shipping information</h1>
        <Information/>
    </div>
  )
}
