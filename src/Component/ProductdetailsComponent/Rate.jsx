[]
import { IoStarSharp } from "react-icons/io5";

export default function Rate() {
  return (
    <div className="w-full flex flex-col justify-center gap-4 items-center">
      <div className=" w-full flex flex-col justify-center gap-2 items-center">
        <div className="w-full flex gap-1">
          <IoStarSharp className="text-orange-400 w-4 h-4" />
          <IoStarSharp className="text-orange-400 w-4 h-4" />
          <IoStarSharp className="text-orange-400 w-4 h-4" />
          <IoStarSharp className="text-orange-400 w-4 h-4" />
          <IoStarSharp className="text-gray-400 w-4 h-4" />
          <p className="font-semibold text-[14px] text-[#00000080]">
            (210 Review)
          </p>
        </div>
        <h1 className="w-full font-normal text-[16px] text-[#00000080]">
          Rate: <span className="font-semibold text-[#222222]">4.2</span>
        </h1>
      </div>
    </div>
  );
}
