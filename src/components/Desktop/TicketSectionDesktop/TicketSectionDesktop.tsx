import { Ticket } from "~/components/common/Ticket";
import { PurchaseButton } from "~/components/common/PurchaseButton";

import styles from "./TicketSectionDesktop.module.scss";

export const TicketSectionDesktop = () => {
  return (
    <section className={styles.ticketSection}>
      <Ticket variant="large" />
      <div className={styles.purchaseButtonWrapper}>
        <PurchaseButton size="medium" />
      </div>
    </section>
  );
};
