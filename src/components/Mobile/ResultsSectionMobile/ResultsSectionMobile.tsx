import { ResultItem } from "./ResultItem/ResultItem";
import styles from "./ResultsSectionMobile.module.scss";

export const ResultsSectionMobile = () => {
  const resultItemsProps = [
    {
      title: "Перелік документів для легальної роботи майстра",
      description:
        "Розкажемо, які документи необхідні для легальної роботи майстром.",
      borderVariant: "right",
      circlePosition: "right",
    },
    {
      title: "Повне розуміння ідеального кабінету майстра",
      description:
        "Пройдемось по головних аспектах, на що варто звернути увагу при виборі та облаштуванні кабінету, починаючи із локації, закінчуючи загальною атмосферою в кабінеті.",
      borderVariant: "left",
      circlePosition: "left",
    },
    {
      title: "Покроковий план пошуку та утримання клієнтів",
      description:
        "Навчитесь генерувати потік нових клієнтів та утримувати постійнників без додаткових витрат.",
      borderVariant: "right",
      circlePosition: "right",
    },
  ] as {
    title: string;
    description: string;
    borderVariant?: "left" | "right";
    circlePosition?: "left" | "right";
  }[];

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
          <ResultItem key={index} {...props} />
        ))}
      </div>
      <div className={styles.bottomLine}>
        <div className={styles.bottomRectangle} />
      </div>
    </section>
  );
};
