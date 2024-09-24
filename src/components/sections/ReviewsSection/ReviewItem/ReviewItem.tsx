import styles from "./ReviewItem.module.scss";

interface Props {
  reviewerName: string;
  reviewText: string;
  reviewerAvatar: string;
}

export const ReviewItem = ({
  reviewerName,
  reviewText,
  reviewerAvatar,
}: Props) => {
  return (
    <div className={styles.reviewItem}>
      <div className={styles.headlineWrapper}>
        <img
          src={reviewerAvatar}
          alt={reviewerName}
          className={styles.avatar}
        />
        <span className={styles.reviewerName}>{reviewerName}</span>
      </div>
      <p className={styles.reviewText}>{reviewText}</p>
    </div>
  );
};
