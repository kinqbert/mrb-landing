import { Ticket } from "~/components/common/Ticket";
import styles from "./TicketSectionMobile.module.scss";

export const TicketSectionMobile = () => {
  return (
    <section className={styles.ticketSection}>
      <Ticket />
      <div className={styles.callout}>Почни шлях до успіху!</div>
    </section>
  );
};
