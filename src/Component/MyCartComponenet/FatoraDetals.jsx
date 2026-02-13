import { useCounterStoreForCart } from "../../store";
export default function FatoraDetals() {
    const count = useCounterStoreForCart((state) => state.count);
  return (
    <div className="w-full flex flex-col justify-center items-start gap-6">
      <div className="w-full flex justify-between items-start">
        <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
        <h1 className="font-semibold text-[24px] text-[#222222]">${40*count*3}</h1>
      </div>
      <div className="w-full flex justify-between items-start">
        <h1 className="font-normal text-[20px] text-[#22222280]">Shipping</h1>
        <h1 className="font-semibold text-[24px] text-[#222222]">
          Free Delivery
        </h1>
      </div>
      <div className="w-full flex justify-between items-start">
        <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
        <h1 className="font-semibold text-[24px] text-[#222222]">$4</h1>
      </div>
      <div className="h-0 w-full border border-[#22222233]"></div>
      <div className="w-full flex justify-between items-start">
        <h1 className="font-normal text-[20px] text-[#22222280]">Subtotal</h1>
        <h1 className="font-bold text-[28px] text-[#D9176C]">${3*40*count+4}</h1>
      </div>
    </div>
  );
}
