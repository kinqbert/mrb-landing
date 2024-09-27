import { personAvatar1, personAvatar2 } from "~/assets/images";
import styles from "./ReviewsSectionMobile.module.scss";
import { ReviewItem } from "./ReviewItem";

export const ReviewsSectionMobile = () => {
  const reviews = [
    {
      reviewerName: "Олена",
      reviewText:
        'Курс "Знайди свого клієнта" перевершив мої очікування! Матеріал подається чітко та зрозуміло, багато практичних кейсів і реальних прикладів.',
      reviewerAvatar: personAvatar1,
    },
    {
      reviewerName: "Катерина",
      reviewText:
        "Завдяки курсу я навчився ефективно визначати свою цільову аудиторію і будувати стратегію продажів.",
      reviewerAvatar: personAvatar2,
    },
  ];

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Слухай, що кажуть наші учні!</h2>
      <p className={styles.subText}>
        Відгуки від тих, хто вже пройшов курс і досяг успіху. Реальні історії
        успіху та рекомендації.
      </p>
      <div className={styles.reviewsList}>
        {reviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </div>
    </section>
  );
};
