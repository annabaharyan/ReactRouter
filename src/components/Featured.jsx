import { useState, useEffect } from "react";
import styles from "../styles/products.module.scss";

const Featured = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.prods}>
      {products ? (
        products.map((product, index) => (
          <p key={product.id}>
            <span>{index + 1}.</span>
            <span>{product.title}</span>
          </p>
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Featured;
