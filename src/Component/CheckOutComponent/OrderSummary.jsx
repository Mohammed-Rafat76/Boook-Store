import OrderSummaryCard from "./OrderSummaryCard";

export default function OrderSummary() {
  return (
    <div className="w-full flex justify-center xl:items-start items-center flex-col gap-10">
        <h1 className=' font-semibold text-[18px] text-[#222222]'>Order summary</h1>
        <OrderSummaryCard/>
        <OrderSummaryCard/>
    </div>
  )
}
