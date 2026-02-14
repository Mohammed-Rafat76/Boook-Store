import { CiTrash } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";
import HistoryData from "./HistoryData";

export default function ShippingStage() {
  return (
    <div className="w-full rounded-[20px] border border-[#D9176C33] p-6 pb-10 flex flex-col justify-center items-center gap-10  ">
      <div className="w-full flex flex-col gap-5 justify-center items-center ">
        <div className="w-full flex justify-end items-center  ">
          <CiTrash className="w-7.5 h-7.5 text-[#D9176C80]" />
        </div>
        <HistoryData />
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#D9176C]  " />
          </div>
          <div className="xl:w-120 lg:w-100 md:w-75 w-20 border border-[#D9176C]  "></div>
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#D9176C]  " />
          </div>
          <div className="xl:w-120 lg:w-100 md:w-75 w-20 border border-[#ACACAC]  "></div>
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#ACACAC]  " />
          </div>
        </div>
        <div className="flex justify-center xl:gap-106 lg:gap-75 md:gap-50 gap-5 items-center">
          <h1 className="font-semibold text-[20px] text-[#D9176C]">
            Order placed
          </h1>
          <h1 className="font-semibold text-[20px] text-[#D9176C]">Shipping</h1>
          <h1 className="font-semibold text-[20px] text-[#ACACAC]">
            Completed
          </h1>
        </div>
      </div>
    </div>
  );
}
