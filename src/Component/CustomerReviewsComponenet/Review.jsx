import { IoStarSharp } from "react-icons/io5";
import userImg from "../../assets/7098886df02b2521176bde95e31347ff1428d87f.jpg";

export default function Review() {
  return (
    <div className="bg-white py-4 xl:px-6 px-2 flex flex-col justify-center items-start gap-4">
      <div className=" flex justify-center items-center gap-2.5">
        <img src={userImg} className="w-15 h-15 rounded-[100px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-1">
          <h1 className="font-semibold text-[18px] text-[#222222]">
            John Smith
          </h1>
          <h1 className="font-semibold text-[14px] text-[#25D994]">
            Verified Purchase
          </h1>
        </div>
      </div>
      <h1 className="text-[#22222280] text-[16px] font-normal">
        Reviewed On 28/07/2024
      </h1>
      <div className=" flex flex-col gap-2 justify-center items-start">
        <div className="text-[20px] font-semibold text-[#222222] flex justify-start gap-4 items-center">
          <h1 className="xl:w-65 w-40">Excellent Book</h1>
          <h1>5.0</h1>
          <div className="w-full flex gap-1">
            <IoStarSharp className="text-orange-400 w-4 h-4" />
            <IoStarSharp className="text-orange-400 w-4 h-4" />
            <IoStarSharp className="text-orange-400 w-4 h-4" />
            <IoStarSharp className="text-orange-400 w-4 h-4" />
            <IoStarSharp className="text-orange-400 w-4 h-4" />
          </div>
        </div>
        <p className="font-normal text-[18px] text-[#22222280]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          ultricies est. Aliquam in justo varius, sagittis neque ut,{" "}
        </p>
      </div>
    </div>
  );
}
