
export default function HistoryData() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center">
      <div className="w-full flex justify-between items-center  ">
        <h1 className="font-normal text-[20px] text-[#22222280] ">Order No.</h1>
        <h1 className="font-semibold text-[20px] text-[#222222] ">#123456</h1>
      </div>
      <div className="w-full flex justify-between items-center  ">
        <h1 className="font-normal text-[20px] text-[#22222280] ">Status</h1>
        <h1 className="font-semibold text-[20px] text-[#222222] ">
          In progress
        </h1>
      </div>
      <div className="w-full flex justify-between items-center  ">
        <h1 className="font-normal text-[20px] text-[#22222280] ">Date</h1>
        <h1 className="font-semibold text-[20px] text-[#222222] ">
          jul, 31 2024
        </h1>
      </div>
      <div className="w-full flex justify-between items-center  ">
        <h1 className="font-normal text-[20px] text-[#22222280] ">Address</h1>
        <h1 className="font-semibold text-[20px] text-[#222222] ">
          Maadi, Cairo, Egypt.
        </h1>
      </div>
    </div>
  );
}
