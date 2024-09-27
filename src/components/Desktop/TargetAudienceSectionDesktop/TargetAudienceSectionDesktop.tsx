import { targetAudienceData } from "~/constants/targetAudienceData";
import styles from "./TargetAudienceSectionDesktop.module.scss";
import {
  TargetAudienceElement1,
  TargetAudienceElement2,
  TargetAudienceElement3,
} from "~/assets/svg/targetAudienceElements";
import { crownEmoji, nailsEmoji, officeWomanEmoji } from "~/assets/images";

export const TargetAudienceSectionDesktop = () => {
  return (
    <section className={styles.targetAudienceSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Кому підійде курс?</h2>
        <img
          className={styles.titleArrowElement1}
          src={TargetAudienceElement1}
        />
        <img className={styles.titleEmojiElement1} src={nailsEmoji} />
      </div>
      <div className={styles.targetAudienceItems}>
        <div className={styles.targetAudienceItem}>
          <h3 className={styles.targetAudienceItemTitle}>
            {targetAudienceData[0].title}
          </h3>
          <p className={styles.targetAudienceItemDescription}>
            {targetAudienceData[0].description}
          </p>
        </div>
        <div className={styles.targetAudienceItem}>
          <h3 className={styles.targetAudienceItemTitle}>
            {targetAudienceData[1].title}
          </h3>
          <p className={styles.targetAudienceItemDescription}>
            {targetAudienceData[1].description}
          </p>
          <img className={styles.arrowElement2} src={TargetAudienceElement2} />
          <img className={styles.emojiElement2} src={officeWomanEmoji} />
          <img className={styles.arrowElement3} src={TargetAudienceElement3} />
          <img className={styles.emojiElement3} src={crownEmoji} />
        </div>
        <div className={styles.targetAudienceItem}>
          <h3 className={styles.targetAudienceItemTitle}>
            {targetAudienceData[2].title}
          </h3>
          <p className={styles.targetAudienceItemDescription}>
            {targetAudienceData[2].description}
          </p>
        </div>
      </div>
    </section>
  );
};
