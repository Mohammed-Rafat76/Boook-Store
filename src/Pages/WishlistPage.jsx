import HeadersComponents from "../Component/MyCartComponenet/HeadersComponents";
import SingleCardCart from "../Component/MyCartComponenet/SingleCardCart";
import TheButtons from "../Component/WishlistComponents/TheButtons";


export default function WishlistPage() {
  return (
    <div className="flex flex-col justify-center bg-[#F5F5F5] items-center pb-136.5">
      <div className=" xl:px-15 lg:px-12 md:px-8 px:5 py-15 grid grid-rows-1">
        <HeadersComponents />
        <SingleCardCart />
        <SingleCardCart />
      </div>
      <TheButtons />
    </div>
  );
}
