import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Item } from "./Item";
import { Header } from "./Header";

const Cart = () => {
  const { products, total, amount, formatMoney } = useCart();

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0' }}>
        <h1 style={{ flex: 1, textAlign: 'center', marginRight: '-100px'}}>
          {products.length > 0
            ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
            : "ไม่มีสินค้าในตะกร้า"}
        </h1>
        <Link to="ProductCreate" style={{ marginRight: '100px' }}>
          <button>+</button>
        </Link>
      </div>

      {products.map((data) => {
        return <Item key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Cart;
