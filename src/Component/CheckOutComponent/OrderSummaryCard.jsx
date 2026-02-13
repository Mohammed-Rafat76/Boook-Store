import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import { Link } from "react-router-dom";
import FreeShippingToday from "../ProductdetailsComponent/FreeShippingToday";

import CounterOrderSummary from "./CounterOrderSummary";

export default function OrderSummaryCard() {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-6">
      <img
        src={bookImg}
        className="object-cover xl:w-27.75 xl:h-full   w-50 h-80"
        alt=""
      />
      <div className="flex flex-col justify-start items-center gap-4">
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <Link
            to={"/productdetailsPage"}
            className="cursor-pointer text-[16px] w-full font-bold text-[#222222]"
          >
            Rich Dad And Poor Dad
          </Link>
          <p className="w-full  font-normal text-[14px] text-[#22222280]">
            Author: <span className="text-[#222222]">Robert T. Kiyosanki</span>
          </p>
        </div>
        <FreeShippingToday />
        <div className="flex flex-row w-full justify-between items-center">
            <p className="text-[24px] font-bold text-[#222222]">$40</p>
            <CounterOrderSummary/>
        </div>
      </div>
    </div>
  );
}
