import Apply from "./Apply";
import Fatora from "./Fatora";

export default function PaymentSummary() {
  return (
    <div className="bg-[#3B2F4A1A] pt-10 flex gap-15 xl:gap-0 flex-col xl:flex-row justify-center xl:justify-between items-center xl:items-start xl:px-28 md:px-18  ">
      <div className="flex flex-col justify-center items-start md:w-129  w-80 gap-20">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="font-bold text-[26px] text-[#222222]">
            Payment Summary
          </h1>
          <h1 className="font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </h1>
        </div>
        <Apply/>
      </div>
      <Fatora/>
    </div>
  );
}
