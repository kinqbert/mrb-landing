import { FaqAccordion } from "~/components/common/FaqAccordion";
import styles from "./FaqSectionDesktop.module.scss";

export const FaqSectionDesktop = () => {
  return (
    <section className={styles.faqSection}>
      <h2 className={styles.sectionTitle}>Часті запитання?</h2>
      <FaqAccordion size="large" />
    </section>
  );
};
