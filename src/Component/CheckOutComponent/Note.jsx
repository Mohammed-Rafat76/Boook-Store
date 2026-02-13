import { FaPencil } from "react-icons/fa6";

export default function Note() {
  return (
    <div className='w-full bg-[#FFFFFF] xl:p-10 lg:p-8 md:p-6 p-4 flex border border-[#22222233] flex-col justify-center gap-10 rounded-3xl items-start'>
        <h1 className='font-semibold text-[16px] text-[#222222]'>Note</h1>
        <div className=' w-full py-4 px-5 border rounded-lg border-[#22222233]'>
            <div className='w-full h-45 flex justify-start items-start gap-3.5'>
                <FaPencil className="w-4 h-4 text-[#22222280]"/>
                <h1 className="font-normal text-[16px] text-[#22222280]">Add note</h1>
            </div>
        </div>
    </div>
  )
}
