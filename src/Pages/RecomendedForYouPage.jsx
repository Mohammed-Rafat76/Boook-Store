import UpperHalfOfProductDetails from "../Component/ProductdetailsComponent/UpperHalfOfProductDetails";
import RecomendedForYou from "../Component/RecomendedForYouComponents/RecomendedForYou";

export default function RecomendedForYouPage() {
  return (
    <div className="bg-[#F5F5F5] lg:px-15 px-5 pt-15">
      <UpperHalfOfProductDetails />
      <RecomendedForYou />
    </div>
  );
}
