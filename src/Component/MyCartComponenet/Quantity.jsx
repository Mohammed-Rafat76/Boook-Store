import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useCounterStore } from "../../store";
export default function Quantity() {
  const count = useCounterStore((state) => state.count);
  const inc = useCounterStore((state) => state.inc);
  const dec = useCounterStore((state) => state.dec);
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
