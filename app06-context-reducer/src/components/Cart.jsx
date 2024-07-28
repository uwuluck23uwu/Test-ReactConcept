import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { Header } from "./Header";

const Cart = () => {
  const { products, total, amount, formatMoney } = useCart();

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0
          ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
          : "ไม่มีสินค้าในตะกร้า"}
        <Link to="ProductCreate">
          <button>+</button>
        </Link>
      </h1>

      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Cart; // Export default
