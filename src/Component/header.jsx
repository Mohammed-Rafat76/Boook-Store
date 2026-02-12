import { FaBook } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import OpenMenuModal from "./OpenMenuModal";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import userImg from "../assets/7098886df02b2521176bde95e31347ff1428d87f.jpg";
export default function Header({ isLoggedIn, logout }) {
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
        <div className="flex justify-center items-center gap-6">
          <div className="relative">
            <CiHeart className="w-6 h-6 " />
            <div className="w-4.5 h-4.5 absolute -top-2 left-3.5 flex items-center justify-center bg-[#D9176C] border border-[#FFFFFF] rounded-[100px] text-[10px] p-0.75">
              10
            </div>
          </div>
          <div className="relative">
            <AiOutlineShoppingCart className="w-6 h-6 " />
            <div className="w-4.5 h-4.5 absolute -top-2 left-3.5 flex items-center justify-center bg-[#D9176C] border border-[#FFFFFF] rounded-[100px] text-[10px] p-0.75">
              10
            </div>
          </div>
          <div className="flex justify-center items-center gap-2.5">
            <img src={userImg} className="w-10 h-10 rounded-[100px]" alt="" />
            <div className="flex flex-col justify-center items-start gap-1">
              <h1 className="font-semibold text-[16px] text-[#FFFFFF]">
                John Smith
              </h1>
              <h1 className="font-light text-[14px] text-[#FFFFFF80]">
                Johnsmith@gmail.com
              </h1>
            </div>
          </div>
         
            <button
              onClick={() => {
                logout;
              }}
              class="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
            >
              <div class="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3">
                <svg class="w-4 h-4" viewBox="0 0 512 512" fill="white">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div class="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                Logout
              </div>
            </button>
       
        </div>
        <OpenMenuModal />
      </nav>
    </div>
  );
}
