import styles from "./TicketSection.module.scss";

export const TicketSection = () => {
  return (
    <section className={styles.ticketSection}>
      <div className={styles.ticketWrapper}>
        <div className={styles.ticket}>
          <div className={styles.leftContent}>
            <p className={styles.leftText}>Не проґав свій шанс на успіх!</p>
          </div>
          <div className={styles.rightContent}>
            <p className={styles.rightContentTopText}>
              Купуй курс "Знайди свого клієнта" зараз за акційною ціною
            </p>
            <div className={styles.priceWrapper}>
              <span className={styles.price}>490 грн</span>
              <span className={styles.priceDiscounted}>1600 грн</span>
            </div>
            <p className={styles.rightContentBottomText}>
              І почни свій шлях до успіху вже сьогодні!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.callout}>Почни шлях до успіху!</div>
    </section>
  );
};
