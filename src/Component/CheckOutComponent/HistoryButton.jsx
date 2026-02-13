import { Link } from "react-router-dom";


export default function HistoryButton() {
  return (
    <Link to={"/historyPage"} className="w-full cursor-pointer flex text-[#D9176C] py-3 px-4 rounded-lg justify-center items-center border border-[#D9176C] gap-2.5 font-semibold text-[16px] bg-[#FFFFFF]">
      Show History
    </Link>
  )
}
