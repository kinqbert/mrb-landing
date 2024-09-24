import { FaqAccordion } from "./FaqAccordion";
import styles from "./FaqSection.module.scss";

export const FaqSection = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.title}>Часті запитання?</h2>
      <div className={styles.accordionWrapper}>
        <FaqAccordion />
      </div>
    </section>
  );
};
