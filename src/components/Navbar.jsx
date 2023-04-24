import { NavLink } from "react-router-dom";
import styles from "../styles/navbar.module.scss";
import { useAuth } from "../utils/auth";
const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const auth = useAuth();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" style={navLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyles}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" style={navLinkStyles}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" style={navLinkStyles}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" style={navLinkStyles}>
            Profile
          </NavLink>
        </li>
        {!auth.user && (
          <li>
            <NavLink to="/login" style={navLinkStyles}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
