import { Link } from "react-router-dom";
import OrderplacedStage from "../Component/HistoryComponent/OrderplacedStage";

export default function HistoryPage() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 xl:px-15 lg:px-10 px-5 py-15 bg-[#F5F5F5]">
      <div className="flex justify-start items-center gap-6">
        <Link className="py-2.5 px-6 bg-[#D9176C80] rounded-lg text-[16px] font-normal text-[#FFFFFF]">
          All
        </Link>
        <Link className="py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          In Progress
        </Link>
        <Link className="py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          Completed
        </Link>
        <Link className="py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          Canceled
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <OrderplacedStage />
      </div>
    </div>
  );
}
