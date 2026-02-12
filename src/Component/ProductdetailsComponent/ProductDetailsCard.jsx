import { IoStarSharp } from "react-icons/io5";
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import bookImg2 from "../../assets/f28cf05ff44dd60c1e6c9b8eb5821af0629ee4d0.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useCounterStore } from "../../store";
import ProductDetails from "./ProductDetails";

export default function ProductDetailsCard() {
  const count = useCounterStore((state) => state.count);
  const inc = useCounterStore((state) => state.inc);
  const dec = useCounterStore((state) => state.dec);

  return (
    <div className="px-15 pt-15 ">
      <div className="pb-17.5">
        <div className="flex flex-col xl:flex-row justify-center xl:items-start items-center gap-10 border-b border-[#2222221A] lg:border-0 pb-10 lg:pb-0">
          <img
            src={bookImg}
            className="object-cover xl:w-78 xl:h-full lg:w-40 lg:h-55.5  w-35 h-55"
            alt=""
          />
          <div className="w-full flex flex-col gap-6 justify-between items-center">
            <div className="w-full flex p-5 xl:p-0 flex-col gap-8 justify-between items-start">
              <div className="w-full flex p-5 xl:p-0 flex-col xl:flex-row gap-8 justify-between items-start">
                <div className="w-full flex flex-col justify-start items-center gap-2">
                  <Link
                    to={"/productdetailsPage"}
                    className="cursor-pointer text-[18px] w-full font-bold text-[#222222]"
                  >
                    Rich Dad And Poor Dad
                  </Link>
                  <p className="w-full  font-normal text-[16px] text-[#22222280]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris et ultricies est. Aliquam in justo varius, sagittis
                    neque ut, malesuada leo. Aliquam in justo varius, sagittis
                    neque ut, malesuada leo.
                  </p>
                </div>
                <div className=" flex justify-center items-center gap-6">
                  <div className="w-full flex justify-center items-center gap-3">
                    <FaFacebook className="w-6 h-6 text-blue-500" />
                    <AiFillInstagram className="w-6 h-6 text-pink-600" />
                    <FaXTwitter className="w-6 h-6 text-black" />
                    <FaSquareWhatsapp className="w-6 h-6 text-green-500" />
                  </div>
                  <IoShareSocialOutline className="w-8 h-8 text-black" />
                </div>
              </div>

              <div className="w-165 flex justify-between items-start  gap-6">
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                  <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                    Author
                  </h1>
                  <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                    Robert T. Kiyosaki
                  </h1>
                </div>
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                  <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                    Publication Year
                  </h1>
                  <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                    1997
                  </h1>
                </div>
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                  <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                    Book
                  </h1>
                  <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                    1 Of 1
                  </h1>
                </div>
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                  <h1 className="w-full text-[14px] font-normal text-[#22222280]">
                    Pages
                  </h1>
                  <h1 className="w-full text-[14px] font-semibold text-[#222222]">
                    336
                  </h1>
                </div>
                <div className="w-full flex flex-col justify-center gap-2 items-center">
                  <h1 className=" w-full text-end lg:text-center text-[14px] font-normal text-[#22222280]">
                    Language
                  </h1>
                  <h1 className="w-full text-end lg:text-center text-[14px] font-semibold text-[#222222]">
                    English
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row justify-between items-center ">
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
                    Rate:{" "}
                    <span className="font-semibold text-[#222222]">4.2</span>
                  </h1>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center gap-6 items-end">
                <div className="flex justify-center items-center gap-3">
                  <div className="flex justify-center items-center gap-2 rounded-lg border text-[#25D994] py-2 px-3 bg-white border-[#22222233] text-[14px] font-normal">
                    <IoCheckmarkDoneCircleSharp className="text-[#25D994]" />
                    In Stock
                  </div>
                  <div className="flex justify-center items-center gap-2 rounded-lg border py-2 px-3 text-[#22222280] bg-white border-[#22222233] text-[14px] font-normal">
                    <CiDeliveryTruck className="text-green-600" />
                    Free Shipping Today
                  </div>
                </div>
                <div className="text-[14px] font-normal text-[#EAA451] border-[#22222233] rounded-lg border bg-white flex justify-end py-2 px-3 items-center gap-2.5 ">
                  Discount code: Ne212
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between gap-6 items-center">
              <h1 className="w-full flex justify-start items-center gap-4 font-semibold text-[28px] lg:text-end text-start pt-4 lg:pt-0 text-[#222222]">
                $40.00
                <p className="text-[#22222280]  text-[24px] font-semibold line-through">
                  $40.00
                </p>
              </h1>
              <div className="w-full flex justify-end items-center gap-4 ">
                <div className="flex justify-center items-center gap-6 text-black font-bold">
                  <CiCircleMinus
                    onClick={dec}
                    className="cursor-pointer text-[#D9176C] w-6 h-6"
                  />
                  {count}
                  <CiCirclePlus
                    onClick={inc}
                    className="cursor-pointer text-[#D9176C] w-6 h-6"
                  />
                </div>
                <button className=" cursor-pointer flex bg-[#D9176C] py-3 px-4 rounded-lg justify-center items-center gap-2.5 font-semibold text-[16px] text-[#FFFFFF]">
                  Add To Cart <AiOutlineShoppingCart className="w-5 h-5" />
                </button>
                <div className="text-[#D9176C] rounded-lg border p-3 flex justify-center items-center gap-2.5 bg-transparent border-[#D9176C]">
                  <CiHeart className="w-5 h-5 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center p-2.5 gap-4">
          <img src={bookImg} className="w-15.5 h-27" alt="" />
          <img src={bookImg2} className="w-15.5 h-27" alt="" />
          <img src={bookImg} className="w-15.5 h-27" alt="" />
        </div>
      </div>
      <ProductDetails/>
    </div>
  );
}
