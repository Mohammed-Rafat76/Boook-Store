import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export default function InStock() {
  return (
    <div className="flex justify-center items-center gap-2 rounded-lg border text-[#25D994] py-2 px-3 bg-white border-[#22222233] text-[14px] font-normal">
      <IoCheckmarkDoneCircleSharp className="text-[#25D994]" />
      In Stock
    </div>
  );
}
