import FlashSaleCard from "./FlashSaleCard";
import Timer from "./Timer";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function FlashSaleSection() {
  return (
    <div className="bg-[#F5F5F5] w-full border-t border-[#22222233] xl:px-15 lg:px-12 md:px-7 px-5 py-30 flex flex-col gap-18 ">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className="xl:w-129  flex flex-col justify-center items-start gap-4 ">
          <h1 className="font-bold text-[26px] text-[#222222] ">Flash Sale</h1>
          <p className="font-normal text-[16px] text-[#22222280] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </p>
        </div>
        <div className="border-4 border-[#D9176C] w-36.25 h-36.25 flex justify-center items-center rounded-[50%]">
          <Timer />
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row gap-10 justify-center items-center">
        <button class="hidden xl:block cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">
          <IoIosArrowBack />
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </button>
        <FlashSaleCard />
        <FlashSaleCard />
        <button class="hidden xl:block cursor-pointer bg-gray-800 px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">
          
          <IoIosArrowForward />
          <path
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </button>
      </div>
    </div>
  );
}
