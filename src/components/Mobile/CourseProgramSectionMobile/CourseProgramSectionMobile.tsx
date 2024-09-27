import styles from "./CourseProgramSectionMobile.module.scss";
import { CourseProgramTabs } from "./CourseProgramTabs";

export const CourseProgramSectionMobile = () => {
  return (
    <section className={styles.courseProgramSection}>
      <h2 className={styles.headerText}>Програма курсу</h2>
      <CourseProgramTabs />
    </section>
  );
};
