import { useCounterStoreForCart } from "../../store";

export default function Total({ Price }) {
  const count = useCounterStoreForCart((state) => state.count);
  return (
    <div className="text-[24px] font-bold text-black flex justify-center items-center pt-10 lg:pt-0">
      ${Price * count}
    </div>
  );
}
