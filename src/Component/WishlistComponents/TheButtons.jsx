import CheckOutButton from "./CheckOutButton";
import MoveToCart from "./MoveToCart";

export default function TheButtons() {
  return (
    <div className="xl:w-120.5 w-full flex flex-col lg:flex-row justify-center items-center gap-4 px-5 ">
      <MoveToCart />
      <CheckOutButton price={40} />
    </div>
  );
}
