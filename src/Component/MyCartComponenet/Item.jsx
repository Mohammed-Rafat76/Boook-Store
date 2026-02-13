import { Link } from "react-router-dom";
import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import { CiDeliveryTruck } from "react-icons/ci";
export default function Item() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-start items-center gap-6">
      <img
        src={bookImg}
        className="object-cover xl:w-43.25 xl:h-full w-50 h-80"
        alt=""
      />
      <div className="w-full flex flex-col justify-start items-start gap-8.75">
        <div className="w-full flex flex-col justify-start items-center gap-2">
          <Link
            to={"/productdetailsPage"}
            className="cursor-pointer text-[18px] w-full font-bold text-[#222222]"
          >
            Rich Dad And Poor Dad
          </Link>
          <p className="w-full  font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo. Aliquam in justo varius, sagittis neque ut, malesuada leo.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 rounded-lg border py-2 px-3 text-[#22222280] bg-white border-[#22222233] text-[14px] font-normal">
          <CiDeliveryTruck className="text-green-600" />
          Free Shipping Today
        </div>
        <p className="font-bold text-[14px] text-[#22222280]">ASIN : <span className="font-normal">B09TWSRMCB</span></p>
      </div>
    </div>
  );
}
