import { ArrowLeftCircled } from "~/assets/svg";
import styles from "./OrderPageContent.module.scss";
import { Link } from "react-router-dom";
import { OrderForm } from "../common/OrderForm";

export const OrderPageContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <OrderForm />
      </div>
      <Link className={styles.arrowBackWrapper} to="..">
        <img src={ArrowLeftCircled} />
      </Link>
    </div>
  );
};
