import styles from "./CourseProgramSection.module.scss";
import { CourseProgramTabs } from "./CourseProgramTabs";

export const CourseProgramSection = () => {
  return (
    <section className={styles.courseProgramSection}>
      <h2 className={styles.headerText}>Програма курсу</h2>
      <CourseProgramTabs />
    </section>
  );
};
