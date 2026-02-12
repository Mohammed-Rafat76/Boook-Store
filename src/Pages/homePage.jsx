import BestSellerSection from "../Component/HomeComponent/bestSellerSection";
import FlashSaleSection from "../Component/HomeComponent/FlashSaleSection";
import Recomended from "../Component/HomeComponent/recomended";
import SearshInput from "../Component/HomeComponent/searshInput";
import Serviese from "../Component/HomeComponent/Serviese";
import LoginModal from "../Component/loginModal";


export default function HomePage() {
  return (
    <div >
      <LoginModal/>
      <SearshInput />
      <Serviese/>
      <BestSellerSection/>
      <Recomended/>
      <FlashSaleSection/>
    </div>
  );
}
