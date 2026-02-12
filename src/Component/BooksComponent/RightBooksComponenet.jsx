import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BooksSearsh from "./BooksSearsh";
import Categories from "./Categories";
import BooksCards from "./BooksCards";

export default function RightBooksComponenet() {
  return (
    <div className="w-full bg-[#F5F5F5] pl-6 pr-10 pt-15 flex flex-col gap-6">
      <div className="h-full w-full grid grid-cols-12 gap-6.5">
        <div className="col-span-9">
          <BooksSearsh />
        </div>
        <div className="col-span-3">
          <div className="w-full rounded-xl py-2.5 px-4 border flex justify-between items-center border-[#0000001A]">
            <h1 className="text-[18px] font-normal text-[#22222280]">
              Sort by
            </h1>
            <MdOutlineKeyboardArrowRight className="w-6 h-6 text-[#22222280]" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Categories/>
      </div>
      <div className="w-full ">
            <BooksCards/>
      </div>
    </div>
  );
}
