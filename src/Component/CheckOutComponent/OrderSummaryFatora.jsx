import { useCounterStoreForOrderSumary } from "../../store";

export default function OrderSummaryFatora() {
  const count = useCounterStoreForOrderSumary((state) => state.count);
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-start gap-6">
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[16px] text-[#22222280]">Subtotal</h1>
          <h1 className="font-semibold text-[24px] text-[#222222]">
            ${40 * count * 2}
          </h1>
        </div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[16px] text-[#22222280]">Shipping</h1>
          <h1 className="font-semibold text-[24px] text-[#22222280]">$0</h1>
        </div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[16px] text-[#22222280]">Subtotal</h1>
          <h1 className="font-semibold text-[24px] text-[#222222]">$4</h1>
        </div>
        <div className="h-0 w-full border border-[#22222233]"></div>
        <div className="w-full flex justify-between items-start">
          <h1 className="font-normal text-[16px] text-[#22222280]">Total (USD)</h1>
          <h1 className="font-bold text-[28px] text-[#D9176C]">
            ${2 * 40 * count + 4}
          </h1>
        </div>
      </div>
    </div>
  );
}
