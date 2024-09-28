import { useState } from "react";
import styles from "./FaqAccordion.module.scss";
import { AccordionArrow } from "~/assets/svg";
import { faqAccordionItems } from "~/constants/faqAccordionItems";

interface Props {
  size?: "small" | "large";
}

export const FaqAccordion = ({ size }: Props) => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleAccordionItemClick = (index: number) => {
    if (activeItemIndex === index) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  };

  const getIconWrapperStyles = (index: number) => {
    const resultStyles = [styles.iconWrapper];

    if (activeItemIndex === index) {
      resultStyles.push(styles.iconWrapperActive);
    }

    if (size === "large") {
      resultStyles.push(styles.iconWrapperLarge);
    }

    return resultStyles.join(" ");
  };

  const getAccordionItemStyles = (index: number) => {
    const resultStyles = [styles.accordionItem];

    if (size === "large") {
      resultStyles.push(styles.accordionItemLarge);
    }

    if (activeItemIndex === index) {
      resultStyles.push(styles.accordionItemActive);
    }

    return resultStyles.join(" ");
  };

  const getAccodionItemHeaderStyles = () => {
    if (size === "large") {
      return [styles.accordionItemHeader, styles.accordionItemHeaderLarge].join(
        " "
      );
    }

    return styles.accordionItemHeader;
  };

  const getAccordionItemTitleStyles = () => {
    if (size === "large") {
      return [styles.accordionItemTitle, styles.accordionItemTitleLarge].join(
        " "
      );
    }

    return styles.accordionItemTitle;
  };

  const getAccordionItemTextStyles = () => {
    if (size === "large") {
      return [styles.accordionItemText, styles.accordionItemTextLarge].join(
        " "
      );
    }

    return styles.accordionItemText;
  }

  return (
    <div className={styles.accordion}>
      {faqAccordionItems.map((item, index) => (
        <div
          key={index}
          className={getAccordionItemStyles(index)}
          onClick={() => handleAccordionItemClick(index)}
        >
          <div className={getAccodionItemHeaderStyles()}>
            <span
              className={getAccordionItemTitleStyles()}
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
            <p className={getAccordionItemTextStyles()}>{item.textContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
