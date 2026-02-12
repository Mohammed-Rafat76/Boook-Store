import { IoStarSharp } from "react-icons/io5";
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
export default function SinglBookCard() {
  return (
    <div className="flex justify-center items-start gap-10">
      <img
        src={bookImg}
        className="object-cover xl:w-49 xl:h-full lg:w-40 lg:h-55.5  w-35 h-55"
        alt=""
      />
      <div className="w-full flex flex-col gap-6 justify-between items-center">
        <div className="w-full flex gap-8 justify-between items-start">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <h1 className="text-[18px] w-full font-bold text-[#222222]">
              Rich Dad And Poor Dad
            </h1>
            <p className="w-full  font-normal text-[16px] text-[#22222280]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              ultricies est. Aliquam in justo varius, sagittis neque ut,
              malesuada leo. Aliquam in justo varius, sagittis neque ut,
              malesuada leo.
            </p>
          </div>
          <div className="w-full text-center border rounded-lg py-2 px-2 text-[#EBC305] bg-white border-[#EBC305] text-[14px] font-normal">
            25% Discount code: Ne212
          </div>
        </div>
        <div className="w-full flex justify-between items-center ">
          <div className="w-full flex flex-col justify-center gap-4 items-center">
            <div className=" w-full flex flex-col justify-center gap-2 items-center">
              <div className="w-full flex gap-1">
                <IoStarSharp className="text-orange-400 w-4 h-4" />
                <IoStarSharp className="text-orange-400 w-4 h-4" />
                <IoStarSharp className="text-orange-400 w-4 h-4" />
                <IoStarSharp className="text-orange-400 w-4 h-4" />
                <IoStarSharp className="text-gray-400 w-4 h-4" />
                <p className="font-semibold text-[14px] text-[#00000080]">
                  (210 Review)
                </p>
              </div>
              <h1 className="w-full font-normal text-[16px] text-[#00000080]">
                Rate: <span className="font-semibold text-[#222222]">4.2</span>
              </h1>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="w-full flex flex-col justify-center gap-2 items-center">
                <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                  Author
                </h1>
                <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                  Robert T. Kiyosaki
                </h1>
              </div>
              <div className="w-full flex flex-col justify-center gap-2 items-center">
                <h1 className=" w-full text-[14px] font-normal text-[#22222280]">
                  Year
                </h1>
                <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                  1997
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center gap-6 items-end">
            <h1 className="w-full font-semibold text-[28px] text-end text-[#222222]">$40.00</h1>
            <div className="w-full flex justify-end items-center gap-4 ">
              <button className="w-full cursor-pointer flex bg-[#D9176C] py-3 px-4 rounded-lg justify-center items-center gap-2.5 font-semibold text-[16px] text-[#FFFFFF]">
                Add To Cart <AiOutlineShoppingCart className="w-5 h-5" />
              </button>
              <div className="text-[#D9176C] rounded-lg border p-3 flex justify-center items-center gap-2.5 bg-transparent border-[#D9176C]">
                <CiHeart className="w-5 h-5 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
