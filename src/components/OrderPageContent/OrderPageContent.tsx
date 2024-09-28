import { ArrowLeftCircled } from "~/assets/svg";
import styles from "./OrderPageContent.module.scss";
import { Link } from "react-router-dom";
import { OrderForm } from "../common/OrderForm";
import useWindowSize from "~/hooks/useWindowSize";

export const OrderPageContent = () => {
  const {width} = useWindowSize();

  const getOrderFormVariant = () => {
    const isMobile = width < 1024;

    if (isMobile) {
      return "default";
    }

    return "large";
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <OrderForm variant={getOrderFormVariant()} />
      </div>
      <Link className={styles.arrowBackWrapper} to="..">
        <img src={ArrowLeftCircled} />
      </Link>
    </div>
  );
};
