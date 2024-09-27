import { useState } from "react";
import styles from "./WhyUsAccordion.module.scss";

const accordionItems = [
  {
    number: "01",
    title: "Сформуєте сталу базу постійних клієнтів",
    textContent:
      "Для формування сталого круга постійних клієнтів важливо мати стратегію, що ґрунтується на розумінні їх потреб, підтримці якості обслуговування та аналізі ринку.",
  },
  {
    number: "02",
    title: "Робочий графік справді стане робочим",
    textContent:
      "Коли ви складаєте робочий графік з розумінням, ви даруєте собі можливість не лише працювати, але й насолоджуватися відпочинком, при цьому не втрачаючи дохід.",
  },
  {
    number: "03",
    title: "Легалізація роботи",
    textContent:
      'Досить боятись того старшного слова "перевірка документів" – оформи їх за кілька днів. Весь перелік необхідних документів для легальнлї роботи надаємо в рамках курсу',
  },
  {
    number: "04",
    title: "Впевненість у своєму майбутньому",
    textContent:
      "Перестань боятись, що не знаєш, як впливати на клієнтів. У цьому курсі ти зрозумієш, як аналізувати своїх клієнтів та що їм потрібно – ці знання дадуть впевненість у твоїх діях.",
  },
  {
    number: "05",
    title: "Підвищення доходу",
    textContent:
      "Почни самостійно контролювати потік своїх клієнтів, свій графік та суму щомісячного доходу.",
  },
  {
    number: "06",
    title: "Зміна колу клієнтів",
    textContent:
      "Досить працювати на моделях, які не приносять тобі нічого більшого, як зірване здоров'я та порожній гаманець. Із цим курсом ти зможеш працювати на себе і мати дохід від клієнтів, які цінують свій час та твою якість роботи.",
  },
];

export const WhyUsAccordion = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  return (
    <div className={styles.accordion}>
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            activeItemIndex === index ? styles.accordionItemActive : ""
          }`}
          onClick={() => handleAccordionItemClick(index)}
        >
          <div className={styles.accordionItemHeader}>
            <div className={styles.accordionItemNumber}>{item.number}’</div>
            <div
              className={styles.accordionItemTitle}
              onClick={() =>
                setActiveItemIndex(index === activeItemIndex ? null : index)
              }
            >
              {item.title}
            </div>
          </div>
          <div className={styles.accordionItemContent}>
            <p className={styles.accordionItemText}>{item.textContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
