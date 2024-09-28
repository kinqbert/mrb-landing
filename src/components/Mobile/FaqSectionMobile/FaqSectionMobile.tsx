import { FaqAccordion } from "../../common/FaqAccordion";
import styles from "./FaqSectionMobile.module.scss";

export const FaqSectionMobile = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Часті запитання?</h2>
      <div className={styles.accordionWrapper}>
        <FaqAccordion />
      </div>
    </section>
  );
};
