import ProductDetails from "./ProductDetails";
import UpperHalfOfProductDetails from "./UpperHalfOfProductDetails";

export default function ProductDetailsCard() {
  return (
    <div className="lg:px-15 px-5 pt-15 ">
      <UpperHalfOfProductDetails />
      <ProductDetails />
    </div>
  );
}
