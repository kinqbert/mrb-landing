import {
  BottomLeftEllipseCorner,
  BottomRightEllipseCorner,
  HalfEllipseRight,
  TopLeftEllipseCorner,
  TopRightEllipseCorner,
} from "~/assets/svg";
import { TargetAudienceItem } from "./TargetAudienceItem";
import styles from "./TargetAudienceSection.module.scss";
import { crownEmoji, nailsEmoji, officeWomanEmoji } from "~/assets/images";

const targetAudienceData = [
  {
    title: "Майстрам-початківцям",
    description:
      "Тільки закінчила фахові курси і не знаєш, де брати справжніх клієнтів? На цьому курсі ти зрозумієш, що почати заробляти гроші можна вже з першого дня.",
    isTopLineVisible: true,
    isTopLineHalfSize: true,
    leftEllipse: BottomLeftEllipseCorner,
    rightEllipse: TopRightEllipseCorner,
    topLeftEllipse: TopLeftEllipseCorner,
    bottomRightEllipse: BottomRightEllipseCorner,
    topLeftEmojiIcon: nailsEmoji,
    bottomRightEmojiIcon: nailsEmoji,
  },
  {
    title: "Досвідченим майстрам",
    description:
      "Так-так, цей курс саме для майстрів, які раніше працювали в салоні або вдома і вирішили працювати самостійно у своєму кабінеті. Ми розберемось, як ефективно почати працювати на себе. ",
    isTopLineVisible: true,
    leftEllipse: BottomLeftEllipseCorner,
    rightEllipse: TopRightEllipseCorner,
    topLeftEllipse: TopLeftEllipseCorner,
    bottomRightEllipse: BottomRightEllipseCorner,
    topLeftEmojiIcon: officeWomanEmoji,
    bottomRightEmojiIcon: crownEmoji,
  },
  {
    title: "Власникам студії",
    description:
      "Завдяки цьому курсу Ви зрозумієте, як безперевно генерувати потік клієнтів для Вашого бізнесу. До того ж проаналізуєте, на скільки студія відповідає запитам Вашого клієнта – можливо, прийшов час для змін?",
    isTopLineVisible: true,
    leftEllipse: BottomLeftEllipseCorner,
    topLeftEllipse: TopLeftEllipseCorner,
    topLeftEmojiIcon: crownEmoji,
  },
];

export const TargetAudienceSection = () => {
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
