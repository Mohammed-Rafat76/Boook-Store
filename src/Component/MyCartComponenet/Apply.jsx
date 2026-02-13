import { IoTicketOutline } from "react-icons/io5";

export default function Apply() {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      <h1 className="font-normal text-[18px] text-[#22222280]">
        Have a discount code?
      </h1>
      <div className="flex justify-center items-center gap-4">
        <div className="py-3.5 px-5 rounded-lg border border-[#22222233] flex justify-center items-center gap-3.5">
          <IoTicketOutline className="w-5 h-5 text-[#22222280]" />
          <h1 className="text-[16px] font-normal text-[#22222280]">
            Enter Promo Code
          </h1>
        </div>
        <button className="group relative w-22 h-12 flex items-center justify-center rounded-full transition-transform active:scale-95 duration-200">
          <div className="absolute inset-0 rounded-full p-[1.5px] bg-linear-to-b from-white/60 via-purple-400/40 to-black/80">
            <div className="relative w-full h-full rounded-full bg-[#211E33] overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,110,255,0.4)_0%,transparent_70%)]"></div>

              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent pointer-events-none"></div>

              <div className="absolute inset-0 rounded-full shadow-[inset_0_2px_10px_rgba(255,255,255,0.1),inset_0_-2px_10px_rgba(0,0,0,0.5)]"></div>

              <span className="relative z-10 text-white font-medium text-[16px] tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                Apply
              </span>
            </div>
          </div>

          <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </button>
      </div>
    </div>
  );
}
