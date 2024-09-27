import { HalfEllipseRight } from "~/assets/svg";
import { TargetAudienceItem } from "./TargetAudienceItem";
import styles from "./TargetAudienceSectionMobile.module.scss";
import { targetAudienceData } from "~/constants/targetAudienceData";

export const TargetAudienceSectionMobile = () => {
  return (
    <section className={styles.targetAudienceSection}>
      <div className={styles.sectionHeaderWrapper}>
        <h2 className={styles.sectionHeaderText}>Кому підійде курс?</h2>
        <img className={styles.sectionHeaderEllipse} src={HalfEllipseRight} />
      </div>
      <div className={styles.targetAudienceItesList}>
        {targetAudienceData.map((item, index) => (
          <TargetAudienceItem key={index} {...item} />
        ))}
      </div>
      <button className={styles.signInButton}>Записатися</button>
    </section>
  );
};
