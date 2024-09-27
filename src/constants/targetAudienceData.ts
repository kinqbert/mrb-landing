import { crownEmoji, nailsEmoji, officeWomanEmoji } from "~/assets/images";
import {
  BottomLeftEllipseCorner,
  BottomRightEllipseCorner,
  TopLeftEllipseCorner,
  TopRightEllipseCorner,
} from "~/assets/svg";

export const targetAudienceData = [
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
