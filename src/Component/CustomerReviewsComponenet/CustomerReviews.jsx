import { Link } from "react-router-dom";
import Review from "./Review";

export default function CustomerReviews() {
  return (
    <div className=" w-full flex flex-col gap-10 pb-45">
      <div className="flex flex-col lg:flex-row justify-start items-center gap-20 border-b-2 border-[#2222221A] pb-6">
        <Link
          to={"/productdetailsPage"}
          className="h-full font-bold text-[26px] text-[#22222280]"
        >
          Product Details
        </Link>
        <h1 className="font-bold text-[26px] text-[#222222]  border-b-3 border-[#EAA451]">
          Customer Reviews
        </h1>
        <Link
          to={"/recomendedForYouPage"}
          className="font-bold text-[26px] text-[#22222280]"
        >
          Recomended For You
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
          <Review />
          <Review />
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
          <Review />
          <Review />
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6">
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}
