import OrderSummaryCard from "./OrderSummaryCard";

export default function OrderSummary() {
  return (
    <div className="flex justify-center items-start flex-col gap-10">
        <h1 className='font-semibold text-[18px] text-[#222222]'>Order summary</h1>
        <OrderSummaryCard/>
        <OrderSummaryCard/>
    </div>
  )
}
