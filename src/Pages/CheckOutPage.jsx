import LeftCheckOutSection from "../Component/CheckOutComponent/LeftCheckOutSection";
import RightCheckOutSection from "../Component/CheckOutComponent/RightCheckOutSection";

export default function CheckOutPage() {
  return (
    <div className="bg-[#F5F5F5] flex flex-col lg:flex-row justify-center items-center gap-6 xl:px-15 lg:px-12 md:px-7 px-4 pt-15 pb-50">
      <LeftCheckOutSection />
      <RightCheckOutSection />
    </div>
  );
}
