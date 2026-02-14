import { CiTrash } from "react-icons/ci";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function OrderplacedStage() {
  return (
    <div className="w-full rounded-[20px] border border-[#D9176C33] p-6 pb-10 flex flex-col justify-center items-center gap-10  ">
      <div className="w-full flex flex-col gap-5 justify-center items-center ">
        <div className="w-full flex justify-end items-center  ">
          <CiTrash className="w-7.5 h-7.5 text-[#D9176C80]" />
        </div>
        <div className="w-full flex justify-between items-center  ">
          <h1 className="font-normal text-[20px] text-[#22222280] ">
            Order No.
          </h1>
          <h1 className="font-semibold text-[20px] text-[#222222] ">#123456</h1>
        </div>
        <div className="w-full flex justify-between items-center  ">
          <h1 className="font-normal text-[20px] text-[#22222280] ">Status</h1>
          <h1 className="font-semibold text-[20px] text-[#222222] ">
            In progress
          </h1>
        </div>
        <div className="w-full flex justify-between items-center  ">
          <h1 className="font-normal text-[20px] text-[#22222280] ">Date</h1>
          <h1 className="font-semibold text-[20px] text-[#222222] ">
            jul, 31 2024
          </h1>
        </div>
        <div className="w-full flex justify-between items-center  ">
          <h1 className="font-normal text-[20px] text-[#22222280] ">Address</h1>
          <h1 className="font-semibold text-[20px] text-[#222222] ">
            Maadi, Cairo, Egypt.
          </h1>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#D9176C]  " />
          </div>
          <div className="w-120 border border-[#ACACAC]  "></div>
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#ACACAC]  " />
          </div>
          <div className="w-120 border border-[#ACACAC]  "></div>
          <div className=" rounded-[100px]  ">
            <IoIosCheckmarkCircle className="w-10 h-10  text-[#ACACAC]  " />
          </div>
        </div>
        <div className="flex justify-center gap-106 items-center">
            <h1 className="font-semibold text-[20px] text-[#D9176C]">Order placed</h1>
            <h1 className="font-semibold text-[20px] text-[#ACACAC]">Shipping</h1>
            <h1 className="font-semibold text-[20px] text-[#ACACAC]">Completed</h1>
        </div>
      </div>
    </div>
  );
}
