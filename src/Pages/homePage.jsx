import BestSellerSection from "../Component/bestSellerSection";
import Recomended from "../Component/recomended";
import SearshInput from "../Component/searshInput";
import Serviese from "../Component/Serviese";


export default function HomePage() {
  return (
    <div >
      <SearshInput />
      <Serviese/>
      <BestSellerSection/>
      <Recomended/>
    </div>
  );
}
