import { resultItemsProps } from "~/constants/resultItemsData";
import {
  ResultItemMobile,
  ResultItemProps,
} from "./ResultItemMobile/ResultItemMobile";
import styles from "./ResultsSectionMobile.module.scss";

export const ResultsSectionMobile = () => {
  return (
    <section className={styles.resultsSection}>
      <h2 className={styles.headerText}>
        Результати, які отримуєш після курсу "Знайди вже своїх клієнтів"
      </h2>
      <div className={styles.topLine}>
        <div className={styles.topCircle} />
      </div>
      <div className={styles.resultItemsList}>
        {resultItemsProps.map((props, index) => (
          <ResultItemMobile key={index} {...(props as ResultItemProps)} />
        ))}
      </div>
      <div className={styles.bottomLine}>
        <div className={styles.bottomRectangle} />
      </div>
    </section>
  );
};
