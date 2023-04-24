import { Link, Outlet } from "react-router-dom";
import styles from "../styles/products.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
const Products = () => {
  
  return (
    <main>
      <form className={styles.search}>
        <input placeholder="search for product" />
        <button>
          <AiOutlineSearch />
        </button>
      </form>
      <ul className={styles.links}>
        <li>
          <Link to="featured">Featured</Link>
        </li>
        <li>
          <Link to="new">New</Link>
        </li>
      </ul>
      <Outlet/>
    </main>
  );
};

export default Products;
