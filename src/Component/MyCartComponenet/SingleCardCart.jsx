import Item from "./Item";
import Quantity from "./Quantity";
import Price from "./Price";
import Total from "./Total";
import Delete from "./Delete";

export default function SingleCardCart() {
  return (
    <div className="lg:grid grid-cols-[1.6fr_0.6fr_0.6fr_0.6fr_40px] p-6">
      <Item />
      <Quantity />
      <Price Price={40} />
      <Total Price={40} />
      <Delete />
    </div>
  );
}
