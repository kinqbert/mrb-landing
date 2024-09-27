import { useState } from "react";
import styles from "./FaqAccordion.module.scss";
import { AccordionArrow } from "~/assets/svg";

const accordionItems = [
  {
    title:
      "Які конкретні навички і техніки я зможу освоїти після завершення цього курсу?",
    textContent:
      "Після закінчення  курсу ти знатимеш, які документи потрібні для легальної роботи в офлайні. Навчишся, як правильно шукати кабінет для роботи. Зрозумієш, який сервіс потрібний саме твоєму клієнту та як працювати із клієнтом і утримувати його біля себе",
  },
  {
    title:
      "Я тільки закінчила курси майстра манікюру/перукаря/бровиста тощо. Чи підходить цей курс для мене?",
    textContent:
      "Так, цей курс розроблений як для початківців, які шукають першого клієнта, так і для досвіченого майстра, який планує переїхати у свій кабінет для роботи. ",
  },
  {
    title: "Скільки часу потрібно для отримання результату?",
    textContent:
      "У даному курсі ти побачиш круті маркетингові стратегії, які доможуть вже за кілька тижнів отримати регулярних клієнтів. А за допомогою методів для утримання клієнтів ти зможеш забути про вільні місця у графіку. ",
  },
  {
    title:
      "Чи є у курсі доступ до відеоуроків або інших демонстраційних матеріалів?",
    textContent:
      "Всі уроки доступні в записі. Кожного дня телеграм-бот буде надсилати новий урок. Доступ до навчальних матеріалів дійсний 2 місяці ",
  },
  {
    title:
      "Як довго триває курс і чи є у мене можливість робити його у власному темпі?",
    textContent:
      "Кожен урок створений максимально інформативно, тому за 15-20-25хв ти отримаєш чіткий план дій із досягненням успішного результату на практиці. Звісно, практикуватись можна у своєму режимі. Однак, моя рекомендація – проходити уроки щодня у своєму режимі. ",
  },
  {
    title:
      "Чи є у курсі модулі або матеріали, що стосуються практичних аспектів управління бізнесом у сфері beauty?",
    textContent:
      "Ні, цей курс стосується грамотного пошуку клієнтів для майстрів, які вже працюють або тільки пройшли профільні курси та починають формувати свою базу постійних клієнтів. ",
  },
  {
    title: 'Коли буде доступний курс "Із майстра у власники салоном краси"?',
    textContent:
      'Курс "Із майстра у власники салоном краси" наразі знаходиться в розробці. Після запису нового курсу, буде надіслано повідомлення в телеграм-боті',
  },
  {
    title:
      "Чи є курсі модулі по роботі із інстаграмом та таргетованій рекламі для майстра?",
    textContent:
      "Якщо ти бажаєш більш детально розібратись із правильним оформленням інстаграм-профілю та налаштуванню просування в інстаграмі, тоді після проходження цього курсу, менеджер зв'яжеться з тобою для надання детальної інформації",
  },
  {
    title: "Скільки грошей треба вкласти для отримання результату?",
    textContent:
      "Основний акцент при створенні курсу було допомогти навіть тим майстрам, які тільки вчора пройшли профільні курси і потребують нових клієнтів прямо зараз без вкладень в рекламу $10000",
  },
];

export const FaqAccordion = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  const getIconWrapperStyles = (index: number) => {
    if (activeItemIndex === index) {
      return [styles.iconWrapper, styles.iconWrapperActive].join(" ");
    } else {
      return styles.iconWrapper;
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
            <span
              className={styles.accordionItemTitle}
              onClick={() =>
                setActiveItemIndex(index === activeItemIndex ? null : index)
              }
            >
              {item.title}
            </span>
            <div className={getIconWrapperStyles(index)}>
              <img src={AccordionArrow} />
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
