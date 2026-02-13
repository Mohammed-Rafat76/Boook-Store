
import { Link } from "react-router-dom";


export default function Fatora() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 md:w-129  w-80 pb-10">
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
          <h1 className="font-semibold text-[24px] text-[#222222]">$120</h1>
        </div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[20px] text-[#22222280]">Shipping</h1>
          <h1 className="font-semibold text-[24px] text-[#222222]">
            Free Delivery
          </h1>
        </div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
          <h1 className="font-semibold text-[24px] text-[#222222]">$4</h1>
        </div>
        <div className="h-0 w-full border border-[#22222233]"></div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
          <h1 className="font-bold text-[28px] text-[#D9176C]">$124</h1>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2.5">
        <Link className="w-full py-3 px-6 bg-[#D9176C] flex justify-center items-center rounded-lg ">
          <h1 className="font-semibold text-[16px] text-white">Check out</h1>
        </Link>
        <Link className="w-full py-3 px-6 bg-transparent border border-[#D9176C] flex justify-center items-center rounded-lg ">
          <h1 className="font-semibold text-[16px] text-[#D9176C]">Keep Shopping</h1>
        </Link>
      </div>
    </div>
  );
}
