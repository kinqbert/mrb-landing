import { useState } from "react";
import styles from "./CourseProgramTabs.module.scss";
import { Tab1, Tab2, Tab3, Tab4, Tab5, Tab6 } from "~/assets/svg";

const tabsData = [
  {
    tabNumber: "1",
    tabTitle: "Урок",
    contentTitle: "Документи для офіційної роботи",
    tabContent:
      "Тут поговоримо як працювати офіційно. Які документи потрібні для того, щоб тримати двері відкритими і не переживати від тих страшних на перший погляд перевірок.",
  },
  {
    tabNumber: "2",
    tabTitle: "Урок",
    contentTitle: "Який він – ідеальний кабінет?",
    tabContent:
      "Обговоримо де краще орендувати кабінет – в центрі чи в спальному районі. На що варто звернути увагу при виборі кабінету?",
  },
  {
    tabNumber: "3",
    tabTitle: "Урок",
    contentTitle: "Штурм та ідея – що потрібно в кабінеті?",
    tabContent:
      "Пропрацюєш шлях свого клієнта та зрозумієш, що має бути в середині для затишного перебування.",
  },
  {
    tabNumber: "4",
    tabTitle: "Урок",
    contentTitle: "Полювання на першого клієнта",
    tabContent:
      "Загальне правило як набрати клієнтів – черезтинне радіо. А де ж знайти того самого клієнта, щоб запустити постійну генерацію клієнтів? Розберемо і пропишемо конкретні дії",
  },
  {
    tabNumber: "5",
    tabTitle: "Урок",
    contentTitle: "Новий клієнт – дорожче постійного",
    tabContent:
      "Як зробити, щоб твій клієнт хотів повернутись знову? У цьому блоці ти зрозумієш, на чому варто не економити та що продовжить життя клієнта у твоєму кабінеті. ",
  },
  {
    tabNumber: "6",
    tabTitle: "Урок",
    contentTitle: "Не злий клієнта",
    tabContent:
      "Я хороший майстер, багато запитів, але записів все ще немає. Розберемо типові помилки, які заважають твоєму клієнту записатись.",
  },
];

export const CourseProgramTabs = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const getCurrentTabBackground = () => {
    switch (activeTabIndex) {
      case 0:
        return Tab1;
      case 1:
        return Tab2;
      case 2:
        return Tab3;
      case 3:
        return Tab4;
      case 4:
        return Tab5;
      case 5:
        return Tab6;
      default:
        return Tab1;
    }
  };

  return (
    <div className={styles.tabsWrapper}>
      <ul className={styles.tabsList}>
        {tabsData.map((tab, index) => (
          <li
            key={index}
            className={styles.tab}
            onClick={() => handleTabClick(index)}
          >
            <span className={styles.tabNumber}>{tab.tabNumber}’</span>
            <span className={styles.tabTitle}>{tab.tabTitle}</span>
          </li>
        ))}
      </ul>
      <div className={styles.tabContent}>
        <h3
          className={`${styles.contentTitle} ${
            styles[`contentTitle--${activeTabIndex + 1}`]
          }`}
        >
          {tabsData[activeTabIndex].contentTitle}
        </h3>
        <div className={styles.tabTextContent}>
          <p className={styles.contentText}>
            {tabsData[activeTabIndex].tabContent}
          </p>
        </div>
        <img
          className={styles.tabContentBackground}
          src={getCurrentTabBackground()}
        />
      </div>
    </div>
  );
};
