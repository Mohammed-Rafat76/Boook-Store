

import Counter from "./Counter";
import AddToCardButton from "./AddToCardButton";
import LikeProduct from "./LikeProduct";
export default function CounterInProductDetails() {

  return (
    <div className="w-full flex justify-end items-center gap-4 ">
      <Counter/>
      <AddToCardButton/>
      <LikeProduct/>
    </div>
  );
}
