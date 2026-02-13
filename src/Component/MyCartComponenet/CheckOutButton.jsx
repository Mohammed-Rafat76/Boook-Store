import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useCounterStoreForCart } from "../../store";

export default function CheckOutButton({price}) {
    const count = useCounterStoreForCart((state) => state.count);
  return (
    <Link className="py-3 px-6 bg-[#D9176C] flex justify-between items-center rounded-lg ">
        <h1>2 Item <br />${price * count}</h1>
        <h1 className="font-bold text-[16px] text-white">Check out</h1>
        <div className="w-8 h-8 bg-[#FFFFFF] rounded-lg p-1">
            <FaArrowRightLong className="text-[#D9176C] w-6 h-6 "/>
        </div>
    </Link>
  )
}
