import { FaSearch } from "react-icons/fa";
import { IoMicOutline } from "react-icons/io5";

export default function SearshInput() {
  return (
    <div>
        <div className="relative flex justify-center ">
        <div className="join absolute -top-85 ">
          <div>
            <label className="input bg-[#FFFFFF] rounded-l-[50px] w-100 h-15 validator text-violet-700 join-item">
              <input type="text" placeholder="Search" className="placeholder:text-[#22222280]" required />
              <IoMicOutline className="w-5 h-5 text-[#22222280]"/>
            </label>
          </div>
          <button className="py-3 px-6 bg-[#D9176C] text-center rounded-r-[50px]"><FaSearch /></button>
        </div>
      </div>
    </div>
  )
}
