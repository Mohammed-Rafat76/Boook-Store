import { CiDeliveryTruck } from "react-icons/ci";

export default function FreeShippingToday() {
  return (
    <div className="flex justify-center items-center gap-2 rounded-lg border py-2 px-3 text-[#22222280] bg-white border-[#22222233] text-[14px] font-normal">
      <CiDeliveryTruck className="text-green-600" />
      Free Shipping Today
    </div>
  );
}
