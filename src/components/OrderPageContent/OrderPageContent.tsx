import { ArrowLeftCircled } from "~/assets/svg";
import styles from "./OrderPageContent.module.scss";
import { Link } from "react-router-dom";
import { OrderForm } from "../common/OrderForm";
import { useEffect, useState } from "react";

export const OrderPageContent = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

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
