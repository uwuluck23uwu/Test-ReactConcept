import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/Images/logo.png";
import "./Header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>REDUX CART</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
