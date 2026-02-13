import CustomerReviews from "../Component/CustomerReviewsComponenet/CustomerReviews";
import UpperHalfOfProductDetails from "../Component/ProductdetailsComponent/UpperHalfOfProductDetails";

export default function CustomerReviewsPage() {
  return (
    <div className="bg-[#F5F5F5] lg:px-15 px-5 pt-15">
      <UpperHalfOfProductDetails />
      <CustomerReviews />
    </div>
  );
}
