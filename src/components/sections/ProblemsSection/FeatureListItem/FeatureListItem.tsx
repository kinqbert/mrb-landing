import styles from "./FeatureListItem.module.scss";

interface Props {
  title: string;
  icon: string;
}

export const FeatureListItem = ({ title, icon }: Props) => {
  return (
    <li className={styles.featureListItem}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={icon} alt="emoji" />
      </div>
      <h3 className={styles.title}>{title}</h3>
    </li>
  );
};
