import styles from "./HeadlineSectionMobile.module.scss";
import { ArrowDownEllipse } from "~/assets/svg";

export const HeadlineSectionMobile = () => {
  return (
    <section className={styles.headlineSection}>
      <div className={styles.headerText}>
        <h1 className={styles.headline}>Софія прозорова</h1>
        <h2 className={styles.subtext}>власниця салону краси</h2>
      </div>
      <div className={styles.photo}>
        <div className={styles.mainImage}></div>
        <div className={styles.backgroundBlob}></div>
      </div>
      <div className={styles.bottomContent}>
        <div className={styles.bottomContentWrapper}>
          <h3 className={styles.bottomSubtext}>
            Віднови та Розвивай Свій Бізнес: Від А до Я з курсом:
          </h3>
          <h2 className={styles.bottomHeadline}>Знайди свого клієнта!</h2>
        </div>
      </div>
      <div className={styles.bottomIconBadgeWrapper}>
        <img src={ArrowDownEllipse} />
      </div>

      <div className={styles.background}></div>
      <div className={styles.calloutWrapper}>
        Почни власну справу або розшир свою студiю до успiшного салону краси без
        зайвих витрат та страхiв.
      </div>
    </section>
  );
};
