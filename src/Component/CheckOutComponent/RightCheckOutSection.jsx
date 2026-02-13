
import OrderSummary from "./OrderSummary";

export default function RightCheckOutSection() {
  return (
    <div className=" xl:p-10 lg:p-8 md:p-6 p-4 bg-[#FFFFFF] border border-[#22222233] rounded-3xl flex flex-col justify-center gap-10 items-start">
      <OrderSummary />
    </div>
  );
}
