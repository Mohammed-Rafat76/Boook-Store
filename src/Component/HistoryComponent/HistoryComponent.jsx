import HistoryData from "./HistoryData";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HistoryComponent() {
  return (
    <div className="w-full rounded-[20px] border border-[#D9176C33] p-6 pb-10 flex flex-col justify-start items-center gap-10">
        <HistoryData/>
        <div className="w-full flex justify-start items-center gap-6">
            <h1 className="font-semibold text-[22px] text-[#D9176C]">View order detail</h1>
            <FaLongArrowAltRight className="w-6 h-6 text-[#D9176C]"/>
        </div>
    </div>
  )
}
