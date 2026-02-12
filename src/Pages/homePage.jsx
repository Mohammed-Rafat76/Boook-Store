import axios from "axios";
import BestSellerSection from "../Component/HomeComponent/bestSellerSection";
import FlashSaleSection from "../Component/HomeComponent/FlashSaleSection";
import Recomended from "../Component/HomeComponent/recomended";
import SearshInput from "../Component/HomeComponent/searshInput";
import Serviese from "../Component/HomeComponent/Serviese";



export default function HomePage() {
 
  return (
    <div>
      <SearshInput />
      <Serviese />
      <BestSellerSection />
      <Recomended />
      <FlashSaleSection />
    </div>
  );
}
