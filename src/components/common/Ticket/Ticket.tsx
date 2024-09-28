import styles from "./Ticket.module.scss";

interface Props {
  variant?: "small" | "large";
}

export const Ticket = ({ variant = "small" }: Props) => {
  const getTicketStyles = () => {
    if (variant === "small") {
      return styles.ticket;
    }

    return [styles.ticket, styles.ticketLarge].join(" ");
  };

  const getLeftTextStyles = () => {
    if (variant === "small") {
      return styles.leftText;
    }

    return [styles.leftText, styles.leftTextLarge].join(" ");
  };

  const getLeftContentStyles = () => {
    if (variant === "small") {
      return styles.leftContent;
    }

    return [styles.leftContent, styles.leftContentLarge].join(" ");
  };

  const getContentTopTextStyles = () => {
    if (variant === "small") {
      return styles.rightContentTopText;
    }

    return [styles.rightContentTopText, styles.rightContentTopTextLarge].join(
      " "
    );
  };

  const getPriceStyles = () => {
    if (variant === "small") {
      return styles.price;
    }

    return [styles.price, styles.priceLarge].join(" ");
  };

  const getPriceDiscountedStyles = () => {
    if (variant === "small") {
      return styles.priceDiscounted;
    }

    return [styles.priceDiscounted, styles.priceDiscountedLarge].join(" ");
  };

  const getRightContentBottomTextStyles = () => {
    if (variant === "small") {
      return styles.rightContentBottomText;
    }

    return [
      styles.rightContentBottomText,
      styles.rightContentBottomTextLarge,
    ].join(" ");
  };

  return (
    <div className={styles.ticketWrapper}>
      <div className={getTicketStyles()}>
        <div className={getLeftContentStyles()}>
          <p className={getLeftTextStyles()}>Не проґав свій шанс на успіх!</p>
        </div>
        <div className={styles.rightContent}>
          <p className={getContentTopTextStyles()}>
            Купуй курс "Знайди свого клієнта" зараз за акційною ціною
          </p>
          <div className={styles.priceWrapper}>
            <span className={getPriceStyles()}>490 грн</span>
            <span className={getPriceDiscountedStyles()}>1600 грн</span>
          </div>
          <p className={getRightContentBottomTextStyles()}>
            І почни свій шлях до успіху вже сьогодні!
          </p>
        </div>
      </div>
    </div>
  );
};
