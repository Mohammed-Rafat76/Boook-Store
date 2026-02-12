
import FlashSaleCard from "../HomeComponent/FlashSaleCard";
import { Link } from "react-router-dom";

export default function RecomendedForYou() {
  return (
    <>
      <div className="w-full flex flex-col gap-10 pb-45">
        <div className="flex justify-start items-center gap-20 border-b-2 border-[#2222221A] pb-6">
          <Link to={"/productdetailsPage"} className="h-full font-bold text-[26px] text-[#22222280] ">
            Product Details
          </Link>
          <Link
            to={"/customerReviewsPage"}
            className="font-bold text-[26px] text-[#22222280]"
          >
            Customer Reviews
          </Link>
          <h1
            
            className="font-bold text-[26px] text-[#222222] border-b-3 border-[#EAA451]"
          >
            Recomended For You
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10 px-40 pb-54">
        <FlashSaleCard />
        <FlashSaleCard />
      </div>
    </>
  );
}
