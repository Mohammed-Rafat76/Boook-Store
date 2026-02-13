import FreeShippingToday from "./FreeShippingToday";
import InStock from "./InStock";

export default function CollectionOfProductExist() {
  return (
    <div className="w-full flex flex-col justify-center gap-6 lg:items-end items-start pt-4 lg:pt-0">
      <div className="flex flex-col lg:flex-row justify-center lg:items-center items-start gap-3">
        <InStock />
        <FreeShippingToday />
      </div>
      <div className="text-[14px] font-normal text-[#EAA451] border-[#22222233] rounded-lg border bg-white flex justify-end py-2 px-3 items-center gap-2.5 ">
        Discount code: Ne212
      </div>
    </div>
  );
}
