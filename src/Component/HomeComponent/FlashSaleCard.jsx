import { IoStarSharp } from "react-icons/io5";
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import { BsCart3 } from "react-icons/bs";

export default function FlashSaleCard() {
  return (
    <div className=" w-full md:p-4 py-4 bg-[#3B2F4A] rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 ">
      <img
        className="object-cover xl:w-44 xl:h-65.5 lg:w-40 lg:h-55.5  w-35 h-55 "
        src={bookImg}
        alt="Clean Code"
      />
      <div className="w-full flex flex-col justify-center xl:items-start items-center gap-2">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-[16px] text-[#FFFFFF]">
                Rich Dad And Poor Dad
              </h1>
              <h1 className="font-normal text-[12px] text-[#FFFFFF80]">
                Author:{" "}
                <span className="font-semibold text-[#FFFFFF]">
                  {" "}
                  Robert T. Kiyosanki
                </span>
              </h1>
            </div>
            <div className="w-full flex flex-col justify-start items-center gap-4.25">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="flex justify-start items-center gap-1">
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-gray-400 w-4 h-4" />
                </div>
                <p className="font-semibold text-[12px] text-[#FFFFFF80]">
                  (180 Review)
                </p>
                <h1 className="font-normal text-[14px] text-[#FFFFFF80]">
                  Rate:{" "}
                  <span className="font-semibold text-[#FFFFFF]">4.2</span>
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <p className="font-semibold text-[14px] text-[#FFFFFF4D]">
                    $45.00
                  </p>
                  <h1 className="font-semibold text-[22px] text-[#FFFFFF]">
                    $30.00
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-48 h-2.25 rounded-[20px] bg-[#EAA451]"></div>
                  <h1 className="font-normal text-[14px] text-[#FFFFFF80]">
                    4 books left
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 justify-center md:justify-end items-center">
          <div className="text-[#FFFFFF] bg-[#D9176C] py-3 px-4 rounded-lg flex justify-center items-center gap-2.5">
            <BsCart3 className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
