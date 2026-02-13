import bookImg from "../../assets/93e9747c9160601f7f3a7a57420103fe4025b18a.png";
import bookImg2 from "../../assets/f28cf05ff44dd60c1e6c9b8eb5821af0629ee4d0.jpg";

import ProductDetailsUpperImg from "./ProductDetailsImg";
import TextCollectionOfProductDetals from "./textCollectionOfProductDetals";
import Rate from "./Rate";
import CollectionOfProductExist from "./collectionOfProductExist";
import CounterInProductDetails from "./CounterInProductDetails";

export default function UpperHalfOfProductDetails() {
  return (
    <div className="pb-17.5">
      <div className="flex flex-col xl:flex-row justify-center xl:items-start items-center gap-10 border-b border-[#2222221A] lg:border-0 pb-10 lg:pb-0">
        <ProductDetailsUpperImg />
        <div className="w-full flex flex-col gap-6 justify-between items-center">
          <TextCollectionOfProductDetals />
          <div className="w-full flex flex-col xl:flex-row justify-between items-center ">
            <Rate />
            <CollectionOfProductExist />
          </div>
          <div className="w-full flex flex-col xl:flex-row justify-between gap-6 items-center">
            <h1 className="w-full flex justify-start items-center gap-4 font-semibold text-[28px] lg:text-end text-start pt-4 lg:pt-0 text-[#222222]">
              $40.00
              <p className="text-[#22222280]  text-[24px] font-semibold line-through">
                $40.00
              </p>
            </h1>
            <CounterInProductDetails />
          </div>
        </div>
      </div>
      <div className="hidden xl:flex justify-start items-center p-2.5 gap-4">
        <img src={bookImg} className="w-15.5 h-27" alt="" />
        <img src={bookImg2} className="w-15.5 h-27" alt="" />
        <img src={bookImg} className="w-15.5 h-27" alt="" />
      </div>
    </div>
  );
}
