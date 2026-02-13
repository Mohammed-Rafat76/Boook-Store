import Note from "./Note";
import PaymentMethod from "./PaymentMethod";
import ShippingInformation from "./ShippingInformation";

export default function LeftCheckOutSection() {
  return (
    <div className=" flex flex-col justify-center items-center gap-6">
      <ShippingInformation />
      <PaymentMethod />
      <Note />
    </div>
  );
}
