import { OrderForm } from '~/components/common/OrderForm';
import styles from './FormSectionDesktop.module.scss';

export const FormSectionDesktop = () => {
  return <section className={styles.formSection}>
    <div className={styles.formWrapper}>
      <OrderForm variant='horizontal' />
    </div>
  </section>
}