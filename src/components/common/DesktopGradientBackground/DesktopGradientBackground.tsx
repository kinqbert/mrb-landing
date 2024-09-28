import styles from "./DesktopGradientBackground.module.scss";

export const DesktopGradientBackground = () => {
  return (
    <div className={styles.desktopGradientBackground}>
      <div className={styles.gradientBackground1} />
      <div className={styles.gradientBackground2} />
      <div className={styles.gradientBackground3} />
      <div className={styles.gradientBackground4} />
      <div className={styles.gradientBackground5} />
    </div>
  );
};
