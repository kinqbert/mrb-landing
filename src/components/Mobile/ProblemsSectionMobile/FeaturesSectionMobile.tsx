import { features } from "~/constants/features";
import { FeatureListItem } from "./FeatureListItem";
import styles from "./FeaturesSectionMobile.module.scss";
import { PhoneIcon } from "~/assets/svg";

export const FeaturesSectionMobile = () => {
  return (
    <section className={styles.problemsSection}>
      <div className={styles.container}>
        <h2 className={styles.headerText}>
          Маєш страхи щодо початку бізнесу? Боїшся витрат, які не виправдають
          себе?
        </h2>
        <p className={styles.description}>
          Наш курс допоможе тобі подолати ці перешкоди!
        </p>
        <p className={styles.subtext}>У курсі ти дізнаєшся, як:</p>
        <ul className={styles.featureList}>
          {features.map((feature, index) => (
            <FeatureListItem
              key={index}
              title={feature.title}
              icon={feature.icon}
            />
          ))}
        </ul>
        <div className={styles.phoneIconWrapper}>
          <img src={PhoneIcon} />
        </div>
      </div>
    </section>
  );
};
