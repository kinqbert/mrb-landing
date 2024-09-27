import { ArrowLeft } from "~/assets/svg";
import styles from "./TargetAudienceItem.module.scss";

interface Props {
  title: string;
  description: string;
  isTopLineVisible?: boolean;
  isTopLineHalfSize?: boolean;
  leftEllipse?: string;
  rightEllipse?: string;
  topLeftEmojiIcon?: string;
  bottomRightEmojiIcon?: string;
  topLeftEllipse?: string;
  bottomRightEllipse?: string;
}

export const TargetAudienceItem = ({
  title,
  description,
  isTopLineVisible,
  isTopLineHalfSize,
  leftEllipse,
  rightEllipse,
  topLeftEllipse,
  bottomRightEllipse,
  topLeftEmojiIcon,
  bottomRightEmojiIcon,
}: Props) => {
  return (
    <div
      className={`${styles.targetAudienceItem} ${
        isTopLineVisible ? styles.hasTopLine : ""
      } ${isTopLineHalfSize ? styles.topLineHalfSize : ""}`}
    >
      <h3 className={styles.itemTitle}>{title}</h3>
      <p className={styles.itemDescription}>{description}</p>
      {isTopLineVisible && (<img className={styles.topLineArrow} src={ArrowLeft} />)}
      {leftEllipse && <img src={leftEllipse} className={styles.leftIcon} />}
      {rightEllipse && <img src={rightEllipse} className={styles.rightIcon} />}
      {topLeftEllipse && (<img src={topLeftEllipse} className={styles.topLeftEllipse} />)}
      {bottomRightEllipse && (<img src={bottomRightEllipse} className={styles.bottomRightEllipse} />)}
      {topLeftEmojiIcon && (<img src={topLeftEmojiIcon} className={styles.topLeftEmojiIcon} />)}
      {bottomRightEmojiIcon && (<img src={bottomRightEmojiIcon}className={styles.bottomRightEmojiIcon}/>)}
    </div>
  );
};
