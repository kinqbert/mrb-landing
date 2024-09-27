import { WhyUsAccordion } from "./WhyUsAccordion";
import styles from "./WhyUsSectionMobile.module.scss";

export const WhyUsSectionMobile = () => {
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
