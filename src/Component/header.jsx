import { FaBook } from "react-icons/fa6";
export default function Header() {
  return (
    <div>
        <nav className="w-full h-23 flex items-center justify-between py-6 px-35">
            <div className="flex gap-6 ">
                <div className="flex items-center gap-2">
                    <FaBook className="w-8 h-8"/> 
                    <h1 className="font-normal text-[16px]">Bookshop</h1>
                </div>
                <div className="w-0 h-7.5 border border-[#FFFFFF] "></div>
                <div className="flex items-center justify-center gap-10">
                    <h1 className="font-semibold text-[18px]">Home</h1>
                    <h1 className="font-semibold text-[18px]">Books</h1>
                    <h1 className="font-semibold text-[18px]">About us</h1>
                </div>
            </div>
            <div className="flex items-center justify-center gap-3">
                <button className="btn rounded-lg py-3 px-4 bg-[#D9176C]">Log in</button>
                <button className="btn rounded-lg py-3 px-4 text-[#D9176C] border border-[#D9176C] bg-[#FFFFFF]">Sign Up</button>
            </div>
        </nav>
    </div>
  )
}
