import { MdOutlinePayment } from "react-icons/md";
import { GiWaterRecycling } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

export default function Serviese() {
  return (
    <div>
        <div className="flex justify-center items-center py-30 px-16 gap-14">
        <div className="flex flex-col justify-center items-start gap-4">
          <TbTruckDelivery className="text-[#22222280] w-8 h-8" />
          <h1 className="font-bold text-[18px] text-[#222222]">
            Fast & Reliable Shipping
          </h1>
          <h1 className="font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <MdOutlinePayment  className="text-[#22222280] w-8 h-8" />
          <h1 className="font-bold text-[18px] text-[#222222]">
            Secure Payment
          </h1>
          <h1 className="font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <GiWaterRecycling className="text-[#22222280] w-8 h-8" />
          <h1 className="font-bold text-[18px] text-[#222222]">
            Easy Returns
          </h1>
          <h1 className="font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          <RiCustomerService2Fill className="text-[#22222280] w-8 h-8" />
          <h1 className="font-bold text-[18px] text-[#222222]">
            24/7 Customer Support
          </h1>
          <h1 className="font-normal text-[16px] text-[#22222280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
            ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
            leo.
          </h1>
        </div>
      </div>
    </div>
  )
}
