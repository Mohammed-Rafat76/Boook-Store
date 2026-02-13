import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useCounterStoreForOrderSumary } from "../../store";

export default function CounterOrderSummary() {
 const count = useCounterStoreForOrderSumary((state) => state.count);
  const inc = useCounterStoreForOrderSumary((state) => state.inc);
  const dec = useCounterStoreForOrderSumary((state) => state.dec);
  return (
    <div className="flex justify-center items-center gap-3 text-black font-bold">
      <CiCircleMinus
        onClick={dec}
        className="cursor-pointer text-[#D9176C] w-6 h-6"
      />
      {count}
      <CiCirclePlus
        onClick={inc}
        className="cursor-pointer text-[#D9176C] w-6 h-6"
      />
    </div>
  );
}
