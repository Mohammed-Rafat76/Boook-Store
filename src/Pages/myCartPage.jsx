import CardsOfCart from "../Component/MyCartComponenet/CardsOfCart";
import HeadersComponents from "../Component/MyCartComponenet/HeadersComponents";
import PaymentSummary from "../Component/MyCartComponenet/PaymentSummary";


export default function MyCartPage() {
  return (
    <div className="bg-[#F5F5F5] xl:px-15 lg:px-12 md:px-8 px:5 py-15 grid grid-rows-1">
      <HeadersComponents/>
      <CardsOfCart />
      <PaymentSummary/>
    </div>
  );
}
