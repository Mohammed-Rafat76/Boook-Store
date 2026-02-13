
import Choose from './Choose'

export default function PaymentMethod() {
  return (
    <div className='xl:p-10 lg:p-8 md:p-6 p-4 bg-[#FFFFFF] border border-[#22222233] w-full rounded-3xl flex flex-col justify-center gap-10 lg:items-start items-center'>
        <h1 className='font-semibold text-[18px] text-[#222222]'>Payment Method</h1>
        <Choose/>
    </div>
  )
}
