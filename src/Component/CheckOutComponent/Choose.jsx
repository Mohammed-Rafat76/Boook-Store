export default function Choose() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6.25">
      <div className=" hover:bg-[#D9176C1A] hover:text-[#D9176C] text-[#222222] hover:border-[#22222233] py-4 px-5 rounded-lg border border-[#22222233] flex justify-center items-center gap-2.5 ">
        <div className="w-4 h-4 border hover:bg-[#D9176C] border-[#222222] hover:border-[#22222233] rounded-[100px] "></div>
        <h1 className="font-normal text-[16px] ">
          Online payment
        </h1>
      </div>
      <div className=" hover:bg-[#D9176C1A] hover:text-[#D9176C] text-[#222222] hover:border-[#22222233] py-4 px-5 rounded-lg border border-[#22222233] flex justify-center items-center gap-2.5 ">
        <div className="w-4 h-4 border hover:bg-[#D9176C] border-[#222222] hover:border-[#22222233]  rounded-[100px] "></div>
        <h1 className="font-normal text-[16px] ">
         Cash on delivery
        </h1>
      </div>
      <div className= "  hover:bg-[#D9176C1A] hover:text-[#D9176C] text-[#222222] hover:border-[#22222233] py-4 px-5 rounded-lg border border-[#22222233] flex justify-center items-center gap-2.5 ">
        <div className="w-4 h-4 border hover:bg-[#D9176C] border-[#222222] hover:border-[#22222233] rounded-[100px] "></div>
        <h1 className="font-normal text-[16px] ">
          POS on delivery
        </h1>
      </div>
    </div>
  );
}
