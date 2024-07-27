import { useCart } from "../context/CartContext"
import { Item } from "./Item"

export const Cart = () => {
  const { products, total, amount } = useCart();

  return (
    <div>
      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};
