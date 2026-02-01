import { FaBook } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiEarthFill } from "react-icons/ri";
import { BsChevronRight } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-[#3B2F4A] flex justify-center items-center w-full h-92.5 px-15">
      <div className="w-full flex flex-col gap-4">
        <div className=" w-full flex justify-between items-center">
          <div className="flex items-center justify-center gap-10 ">
            <div className="flex items-center gap-2">
              <FaBook className="w-7 h-7" />
              <h1 className="font-normal text-[#FFFFFF]/80 text-[14px]">
                Bookshop
              </h1>
            </div>
            <div className="flex items-center justify-center gap-6">
              <h1 className="font-semibold text-[16px]">Home</h1>
              <h1 className="font-semibold text-[16px]">Books</h1>
              <h1 className="font-semibold text-[16px]">About us</h1>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6">
            <FaFacebook className="w-6 h-6" />
            <FaInstagram className="w-6 h-6"/>
            <FaYoutube className="w-6 h-6"/>
            <FaXTwitter className="w-6 h-6"/>
          </div>
        </div>
        <div className="w-full h-0 border border-[#FFFFFF33]"></div>
        <div className="w-full flex justify-between items-center">
            <h1 className="font-normal text-[14px] text-[#FFFFFF]/80">Developed By EraaSoft All Copy Rights Reserved @2024</h1>
            <div className="flex justify-between items-center gap-4">
                <RiEarthFill className="w-6 h-6" />
                <div className="rounded-lg border py-[4.5px] pl-4 pr-2 border-[#FFFFFF80] flex justify-between items-center gap-9.75">
                    <h1 className="font-light text-[16px] text-[#FFFFFF80]  ">English</h1>
                    <BsChevronRight className="w-5 h-5"/>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
