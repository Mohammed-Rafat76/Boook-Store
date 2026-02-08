import { FaBook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import OpenMenuModal from "./OpenMenuModal";
export default function Header() {
  return (
    <div>
      <div
        className={`relative w-full h-44 md:h-54 lg:70 xl:h-84.5 bg-[url(/public/533643aa8db82414f48d43a992d009dda3961386.png)] bg-cover bg- bg-no-repeat bg-position-[center_50%] transform scale-x-[-1]`}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <nav className="w-full absolute top-0 bg-white/20 text-white h-10 md:h-14 lg:h-23 flex items-center justify-between py-6 xl:px-35 lg:px-30 md:px-20 px-5">
          <div className="flex items-center justify-center gap-6 ">
            <div className="flex items-center gap-2">
              <FaBook className="w-8 h-8" />
              <h1 className="font-normal text-[#FFFFFF]/80 text-[16px]">
                Bookshop
              </h1>
            </div>
            <div className="w-0 h-7.5 border border-[#FFFFFF]/30 "></div>
            <div className="hidden lg:flex items-center justify-center gap-10">
              <Link to={"/"} className="font-semibold text-[18px]">Home</Link >
              <Link to={"/books"} className="font-semibold text-[18px]">Books</Link >
              <Link to={"/aboutUs"} className="font-semibold text-[18px]">About us</Link >
            </div>
          </div>
          <div className=" flex items-center justify-center gap-3">
            <Link to={"/login"} className=" rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 bg-[#D9176C]">
              Log in
            </Link>
            <Link to={"/signup"} className=" rounded-lg lg:py-3 md:py-2 py-1 xl:px-4 lg:px-3 md:px-2 px-1 text-[#D9176C] border border-[#D9176C] bg-[#FFFFFF]">
              Sign Up
            </Link>
          </div>
            <OpenMenuModal/>
        </nav>
    </div>
  );
}
