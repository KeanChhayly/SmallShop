import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo192.png";
import "./Header.css";

const Header = ({ cart, setCart }) => {
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Shopping Cart</span>
      </Link>
      {/* <div className="responsive"> */}
      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cart}</span>
      </Link>
      {/* </div> */}
    </header>
  );
};

export default Header;
