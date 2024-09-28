import { resultItemsProps } from "~/constants/resultItemsData";
import { ResultItemDesktop } from "./ResultItemDesktop";
import styles from "./ResultsSectionDesktop.module.scss";

export const ResultsSectionDesktop = () => {
  return (
    <section className={styles.resultsSection}>
      <h2 className={styles.sectionTitle}>
        Результати, які отримуєш після курсу "Знайди вже своїх клієнтів"
      </h2>
      <div className={styles.resultItems}>
        {resultItemsProps.map((item, index) => (
          <ResultItemDesktop key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
