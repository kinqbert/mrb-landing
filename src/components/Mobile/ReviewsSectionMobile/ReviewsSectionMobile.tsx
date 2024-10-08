import styles from "./ReviewsSectionMobile.module.scss";
import { ReviewItem } from "./ReviewItem";
import { reviews } from "~/constants/reviews";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';

export const ReviewsSectionMobile = () => {
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Слухай, що кажуть наші учні!</h2>
      <p className={styles.subText}>
        Відгуки від тих, хто вже пройшов курс і досяг успіху. Реальні історії
        успіху та рекомендації.
      </p>
      <div className={styles.reviewsListWrapper}>
        <Swiper loop={true}>
          {reviews.map((review, index) => (
            <SwiperSlide className={styles.slide} key={index}>
              <ReviewItem {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
