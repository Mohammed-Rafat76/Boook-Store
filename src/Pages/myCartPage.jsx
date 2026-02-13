import Item from "../Component/MyCartComponenet/Item";
import Quantity from "../Component/MyCartComponenet/Quantity";

export default function MyCartPage() {
  return (
    <div className="bg-[#F5F5F5] xl:px-15 lg:px-12 md:px-8 px:5 py-15 grid grid-rows-1">
      <div className="hidden h-7 lg:grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr_40px] px-5 py-8 pb-12 text-[20px] font-semibold text-[#000000]">
        <div>Item</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Price</div>
        <div className="text-center">Total Price</div>
        <div className="text-center">delet</div>
      </div>
      <div className="lg:grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr_40px] p-6">
        <Item/>
        <Quantity/>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}
