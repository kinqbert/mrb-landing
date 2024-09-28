import styles from "./ResultItemMobile.module.scss";

export interface ResultItemProps {
  title: string;
  description: string;
  borderVariant?: "left" | "right";
  circlePosition?: "left" | "right";
}

export const ResultItemMobile = ({
  title,
  description,
  borderVariant,
  circlePosition,
}: ResultItemProps) => {
  const getResultItemClass = () => {
    if (borderVariant === "left") {
      return [styles.resultItem, styles.borderLeft].join(" ");
    } else if (borderVariant === "right") {
      return [styles.resultItem, styles.borderRight].join(" ");
    }

    return styles.resultItem;
  };

  const getCircleClass = () => {
    if (circlePosition === "left") {
      return [styles.circle, styles.circleLeft].join(" ");
    } else if (circlePosition === "right") {
      return [styles.circle, styles.circleRight].join(" ");
    }

    return styles.circle;
  };

  return (
    <div className={styles.resultItemWrapper}>
      <div className={getResultItemClass()}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={getCircleClass()} />
    </div>
  );
};
