import { IoStarSharp } from "react-icons/io5";
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";

export default function RecomendedCard() {
  return (
    <div className="lg:p-10 p-5 bg-[#FFFFFF] flex flex-col md:flex-row justify-between items-center gap-10 ">
      <img className="object-cover w-44 h-66" src={bookImg} alt="Clean Code" />
      <div className="flex flex-col justify-center items-start gap-6">
        <div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[18px] text-[#222222]">
              Rich Dad And Poor Dad
            </h1>
            <h1 className="font-normal text-[14px] text-[#22222280]">
              Author:{" "}
              <span className="font-semibold text-[#222222]">
                {" "}
                Robert T. Kiyosanki
              </span>
            </h1>
          </div>
          <p className="font-normal text-[14px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, Aliquam in justo varius,
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-center items-start gap-2">
              <div className="flex gap-2">
                <div className="flex gap-1">
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-orange-400 w-4 h-4" />
                  <IoStarSharp className="text-gray-400 w-4 h-4" />
                </div>
                <p className="font-semibold text-[12px] text-[#22222280]">
                  (180 Review)
                </p>
              </div>
              <h1 className="font-normal text-[14px] text-[#22222280]">
                Rate: <span className="font-semibold text-[#222222]">4.2</span>
              </h1>
            </div>
            <h1 className="font-semibold text-[26px] text-[#222222]">$30.00</h1>
          </div>
          <div className="w-full flex justify-between items-center">
            <button className="cursor-pointer xl:w-72.25 w-50 flex bg-[#D9176C] py-3 px-4 rounded-lg justify-center items-center gap-2.5 font-semibold text-[16px] text-[#FFFFFF]">
              Add To Cart <AiOutlineShoppingCart className="w-5 h-5" />
            </button>
            <div className="text-[#D9176C] rounded-lg border p-3 flex justify-center items-center gap-2.5 bg-transparent border-[#D9176C]">
              <CiHeart className="w-5 h-5 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
