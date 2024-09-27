import { Link } from "react-router-dom";

import styles from "./PurchaseButton.module.scss";

export const PurchaseButton = () => {
  return (
    <Link to="order">
      <button className={styles.purchaseButton}>ДІЗНАТИСЯ УСІ СЕКРЕТИ</button>
    </Link>
  );
};
