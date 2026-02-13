import { AiOutlineShoppingCart } from "react-icons/ai";

export default function AddToCardButton() {
  return (
    <button className=" cursor-pointer flex bg-[#D9176C] py-3 px-4 rounded-lg justify-center items-center gap-2.5 font-semibold text-[16px] text-[#FFFFFF]">
      Add To Cart <AiOutlineShoppingCart className="w-5 h-5" />
    </button>
  );
}
