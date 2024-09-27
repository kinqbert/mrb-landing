import { OrderForm } from "~/components/common/OrderForm";
import { PurchaseButton } from "~/components/common/PurchaseButton";

import styles from "./HeadlineSectionDesktop.module.scss";

export const HeadlineSectionDesktop = () => {
  return (
    <section className={styles.headlineSection}>
      <div className={styles.pageContent}>
        <div className={styles.formWrapper}>
          <OrderForm />
        </div>
        <div className={styles.personBlock}>
          <h1 className={styles.personName}>СОФІЯ ПРОЗОРОВА</h1>
          <h2 className={styles.personDescription}>власниця салону краси</h2>
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
