import styles from "./ResultItemDesktop.module.scss";

export interface ResultItemDesktopProps {
  title: string;
  description: string;
  emoji: string;
}

export const ResultItemDesktop = ({
  title,
  description,
  emoji,
}: ResultItemDesktopProps) => {
  return (
    <div className={styles.resultItem}>
      <div className={styles.contentWrapper}>
        <img className={styles.emoji} src={emoji} />
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </div>
  );
};
