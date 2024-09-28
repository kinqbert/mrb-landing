import { Link } from "react-router-dom";

import styles from "./PurchaseButton.module.scss";

interface Props {
  size?: "small" | "medium" | "large";
}

export const PurchaseButton = ({ size = "small" }: Props) => {
  const getPurshaseButtonStyles = () => {
    if (size === "small") {
      return styles.purchaseButton;
    } else if (size === "medium") {
      return [styles.purchaseButton, styles.purchaseButtonMedium].join(" ");
    } else {
      return [styles.purchaseButton, styles.purchaseButtonLarge].join(" ");
    }
  };

  return (
    <Link to="order">
      <button className={getPurshaseButtonStyles()}>
        ДІЗНАТИСЯ УСІ СЕКРЕТИ
      </button>
    </Link>
  );
};
