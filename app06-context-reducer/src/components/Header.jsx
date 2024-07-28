import { useCart } from "../context/CartContext";
import "./Header.css"

export const Header = () => {
  const { amount } = useCart();

  return (
    <header className="header">
      <p>Shopping Application</p>
      <p>สินค้าในตะกร้า : {amount}</p>
    </header>
  );
};
