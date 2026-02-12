import { IoMdArrowForward } from "react-icons/io";
export default function OurMissionCard({title}) {
  return (
    <div className="bg-[#FFFFFF] rounded-xl border p-6 flex gap-6 flex-col items-start justify-center border-[#22222233] ">
      <h1 className="font-bold text-[22px] text-[#222222]">
        {title}
      </h1>
      <p className="font-normal text-[16px] text-[#22222280]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
        ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
        leo.Quality Selection Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Mauris et ultricies est. Aliquam in justo varius,
      </p>
      <div className=" flex justify-start items-center gap-2 cursor-pointer">
        <h1 className="font-normal text-[16px] text-[#D9176C]">View More</h1>
        <IoMdArrowForward className="text-[#D9176C] pt-0.5 " />
      </div>
    </div>
  );
}
