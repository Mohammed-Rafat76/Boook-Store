import { Link } from "react-router-dom";
import OrderplacedStage from "../Component/HistoryComponent/OrderplacedStage";
import HistoryComponent from "../Component/HistoryComponent/HistoryComponent";

export default function HistoryPage() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 xl:px-15 lg:px-10 px-5 pt-15 pb-55.5 bg-[#F5F5F5]">
      <div className="w-full flex flex-col xl:flex-row xl:justify-start justify-center items-center gap-6">
        <Link className=" py-2.5 px-6 bg-[#D9176C80] rounded-lg text-[16px] font-normal border border-[#00000033] text-[#FFFFFF]">
          All
        </Link>
        <Link to={"/historyInProgressPage"} className=" py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          In Progress
        </Link>
        <Link to={"/historyCompletedPage"} className=" py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          Completed
        </Link>
        <Link to={"/canceledPage"} className=" py-2.5 px-6 bg-transparent rounded-lg text-[16px] border border-[#00000033] font-normal text-[#222222]">
          Canceled
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <OrderplacedStage />
        <HistoryComponent/>
        <HistoryComponent/>
      </div>
    </div>
  );
}
