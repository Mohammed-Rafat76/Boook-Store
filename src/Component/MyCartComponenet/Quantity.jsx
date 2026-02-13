import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useCounterStoreForCart } from "../../store";
export default function Quantity() {
  const count = useCounterStoreForCart((state) => state.count);
  const inc = useCounterStoreForCart((state) => state.inc);
  const dec = useCounterStoreForCart((state) => state.dec);
  return (
    <div className="text-[24px] font-bold text-black flex lg:justify-center justify-between items-center gap-4 pt-10 lg:pt-0">
      <h1 className="lg:hidden block text-[20px] font-semibold text-[#000000]">
        Quantity
      </h1>
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
