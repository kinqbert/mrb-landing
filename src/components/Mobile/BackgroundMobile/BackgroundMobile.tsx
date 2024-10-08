import {
  BackgroundBlobs1,
  BackgroundBlobs2,
  BackgroundBlobs3,
  BackgroundBlobs4,
  BackgroundBlobs5,
  BackgroundBlobs6,
  BackgroundBlobs7,
} from "~/assets/svg/backgroundBlobs";
import styles from "./BackgroundMobile.module.scss";

export const BackgroundMobile = () => {
  return (
    <div className={styles.backgroundMobile}>
      <img src={BackgroundBlobs1} />
      <img src={BackgroundBlobs2} />
      <img src={BackgroundBlobs3} />
      <img src={BackgroundBlobs4} />
      <img src={BackgroundBlobs5} />
      <img src={BackgroundBlobs6} />
      <img src={BackgroundBlobs7} />
    </div>
  );
};
