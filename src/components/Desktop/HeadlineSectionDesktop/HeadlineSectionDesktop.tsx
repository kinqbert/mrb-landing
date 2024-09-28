import { OrderForm } from "~/components/common/OrderForm";
import { PurchaseButton } from "~/components/common/PurchaseButton";

import styles from "./HeadlineSectionDesktop.module.scss";
import { useEffect, useState } from "react";

export const HeadlineSectionDesktop = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const getOrderFormVariant = () => {
    if (width < 1080) {
      return "default";
    }

    return "large"
  }

  return (
    <section className={styles.headlineSection}>
      <div className={styles.pageContentWrapper}>
        <div className={styles.pageContent}>
          <div className={styles.formWrapper}>
            <OrderForm variant={getOrderFormVariant()} />
          </div>
          <div className={styles.personBlock}>
            <h1 className={styles.personName}>СОФІЯ ПРОЗОРОВА</h1>
            <h2 className={styles.personDescription}>власниця салону краси</h2>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <div className={styles.purchaseButtonWrapper}>
          <PurchaseButton />
        </div>
      </div>
    </section>
  );
};
