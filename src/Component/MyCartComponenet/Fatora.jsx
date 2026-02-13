
import { Link } from "react-router-dom";
import FatoraDetals from "./FatoraDetals";


export default function Fatora() {
  return (
    <div className="flex flex-col justify-center items-start gap-10 md:w-129  w-80 pb-10">
     <FatoraDetals/>
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
