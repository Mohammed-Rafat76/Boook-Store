import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useCounterStoreForCart } from "../../store";
export default function Quantity() {
  const count = useCounterStoreForCart((state) => state.count);
  const inc = useCounterStoreForCart((state) => state.inc);
  const dec = useCounterStoreForCart((state) => state.dec);
  return (
    <div className="flex justify-center items-center gap-6 text-black font-bold pt-10 lg:pt-0">
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
