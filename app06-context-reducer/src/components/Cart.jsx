import { useCart } from "../context/CartContext"
import { Item } from "./Item"

export const Cart = () => {
  const { products, total, amount, formatMoney } = useCart();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตะกร้า"}
      </h1>

      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};
