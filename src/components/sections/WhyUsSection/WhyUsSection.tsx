import { WhyUsAccordion } from "./WhyUsAccordion";
import styles from "./WhyUsSection.module.scss";

export const WhyUsSection = () => {
  return (
    <section className={styles.whyUsSection}>
      <h2 className={styles.sectionHeader}>
        Чому наш курс – це твій ідеальний старт?
      </h2>
      <div className={styles.accordionWrapper}>
        <WhyUsAccordion />
      </div>
    </section>
  );
}
