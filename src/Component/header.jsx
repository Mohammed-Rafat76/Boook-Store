import { FaBook } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import OpenMenuModal from "./OpenMenuModal";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import userImg from "../assets/7098886df02b2521176bde95e31347ff1428d87f.jpg";
export default function Header() {
  return (
    <div>
      <div
        className={`relative w-full h-44 md:h-54 lg:h-70 xl:h-150 bg-[url(/public/533643aa8db82414f48d43a992d009dda3961386.png)] bg-cover bg- bg-no-repeat bg-position-[center_50%] transform scale-x-[-1]`}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <nav className="w-full absolute top-0 bg-white/20 text-white h-10 md:h-14 lg:h-23 flex items-center justify-between py-6 xl:px-35 lg:px-30 md:px-20 px-5">
        <div className="flex items-center justify-center gap-10 ">
          <div className="flex items-center gap-2">
            <FaBook className="w-8 h-8" />
            <h1 className="font-normal text-[#FFFFFF]/80 text-[16px]">
              Bookshop
            </h1>
          </div>
          <div className="w-0 h-7.5 border border-[#FFFFFF]/30 "></div>
          <div className="hidden lg:flex items-center justify-center gap-10">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-semibold text-[18px]   rounded-lg  "
                  : "text-white"
              }
              to={"/"}
            >
              Home
            </NavLink>

            <NavLink
              to={"/books"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-semibold text-[18px]   rounded-lg  "
                  : "text-white"
              }
            >
              Books
            </NavLink>

            <NavLink
              to={"/aboutUs"}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-semibold text-[18px] rounded-lg  "
                  : "text-white"
              }
            >
              About us
            </NavLink>
          </div>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-6">
          <div className="hidden xl:block relative">
            <CiHeart className="w-6 h-6 " />
            <div className="w-4.5 h-4.5 absolute -top-2 left-3.5 flex items-center justify-center bg-[#D9176C] border border-[#FFFFFF] rounded-[100px] text-[10px] p-0.75">
              10
            </div>
          </div>
          <div className="hidden xl:block relative">
            <AiOutlineShoppingCart className="w-6 h-6 " />
            <div className="w-4.5 h-4.5 absolute -top-2 left-3.5 flex items-center justify-center bg-[#D9176C] border border-[#FFFFFF] rounded-[100px] text-[10px] p-0.75">
              10
            </div>
          </div>
          <div className=" flex justify-center items-center gap-2.5">
            <Link to={"/profile"}>
              <img src={userImg} className="w-10 h-10 rounded-[100px]" alt="" />
            </Link>
            <div className="flex flex-col justify-center items-start gap-1">
              <h1 className="font-semibold text-[16px] text-[#FFFFFF]">
                John Smith
              </h1>
              <h1 className="font-light text-[14px] text-[#FFFFFF80]">
                Johnsmith@gmail.com
              </h1>
            </div>
          </div>
        </div>
        <OpenMenuModal />
      </nav>
    </div>
  );
}
