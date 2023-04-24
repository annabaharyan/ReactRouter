import err from "../assets/error.gif";
import styles from "../styles/errorPage.module.scss"
const ErrorPage = () => {
  return (
    <div className={styles.err}>
      <img src={err} alt="page not found" />
    </div>
  );
};

export default ErrorPage;
