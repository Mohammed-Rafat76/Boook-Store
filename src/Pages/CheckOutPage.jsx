import LeftCheckOutSection from "../Component/CheckOutComponent/LeftCheckOutSection";
import RightCheckOutSection from "../Component/CheckOutComponent/RightCheckOutSection";

export default function CheckOutPage() {
  return (
    <div className="bg-[#F5F5F5] flex justify-center items-center gap-6 px-15 pt-15 pb-50">
      <LeftCheckOutSection />
      <RightCheckOutSection />
    </div>
  );
}
