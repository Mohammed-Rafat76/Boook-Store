import { Link } from "react-router-dom";
import ShippingStage from "../Component/HistoryComponent/ShippingStage";
import OrderplacedStage from "../Component/HistoryComponent/OrderplacedStage";

export default function HistoryInProgressPage() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 xl:px-15 lg:px-10 px-5 pt-15 pb-55.5 bg-[#F5F5F5]">
      <div className="w-full flex flex-col xl:flex-row xl:justify-start justify-center items-center gap-6">
        <Link
          to={"/historyPage"}
          className=" py-2.5 px-6 border border-[#00000033] bg-transparent  rounded-lg text-[16px] font-normal text-[#222222] "
        >
          All
        </Link>
        <Link className=" py-2.5 px-6 bg-[#D9176C80] rounded-lg text-[16px] border border-[#00000033] font-normal text-[#FFFFFF]">
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
        <ShippingStage />
        <OrderplacedStage />
      </div>
    </div>
  );
}
