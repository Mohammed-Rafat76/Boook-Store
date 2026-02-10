import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";

export default function SearshInput() {
  return (
    <div>
        <div className="relative flex justify-center ">
        <div className="join absolute xl:-top-85 -top-26 flex items-center xl:h-15 lg:h-13 md:h-10 h-7  ">
          <div className="w-full h-full">
            <label className="input p-0 m-0 bg-[#FFFFFF] rounded-l-[50px] xl:w-100 lg:w-75 md:w-50 w-25 h-full validator text-violet-700 join-item">
              <input type="text" placeholder="Search" className="placeholder:text-[9px] md:placeholder:text-[15px] placeholder:pl-2   placeholder:text-[#22222280]" required />
              <IoMicOutline className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#22222280]"/>
            </label>
          </div>
          <button className=" px-4 bg-[#D9176C] text-center h-full rounded-r-[50px]"><FaSearch className="w-2 md:w-3 h-2 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5" /></button>
        </div>
      </div>
    </div>
  )
}
