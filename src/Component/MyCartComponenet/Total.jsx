import { useCounterStoreForCart } from "../../store";

export default function Total({ Price }) {
  const count = useCounterStoreForCart((state) => state.count);
  return (
    <div className="text-[24px] font-bold text-black flex lg:justify-center justify-between items-center gap-4 lg:gap-0 pt-10 lg:pt-0">
      <h1 className="lg:hidden block text-[20px] font-semibold text-[#000000]">
        Total
      </h1>
      ${Price * count}
    </div>
  );
}
