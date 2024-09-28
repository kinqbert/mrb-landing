import { ukraineFlagEmoji } from "~/assets/images";
import styles from "./InputField.module.scss";

interface Props {
  name: string;
  size?: "default" | "large";
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
  type?: "email" | "text" | "tel";
  title?: string;
  placeholder?: string;
  error?: boolean;
}

export const InputField = ({
  name,
  size = "default",
  required = true,
  value,
  onChange,
  type = "text",
  title,
  placeholder,
  error,
}: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const getInputStyles = () => {
    const classes = [styles.inputField];

    if (type === "tel") {
      classes.push(styles.inputFieldTel);

      if (size === "large") {
        classes.push(styles.inputFieldTelLarge);
      }
    }

    if (size === "large") {
      classes.push(styles.inputFieldLarge);
    }

    if (error) {
      classes.push(styles.inputError);
    }
    return classes.join(" ");
  };

  const getInputTitleStyles = () => {
    const classes = [styles.inputTitle];
    if (size === "large") {
      classes.push(styles.inputTitleLarge);
    }
    return classes.join(" ");
  };

  const getPhoneNumberOverlayStyles = () => {
    const classes = [styles.phoneNumberOverlay];
    if (size === "large") {
      classes.push(styles.phoneNumberOverlayLarge);
    }
    return classes.join(" ");
  }

  const getUkraineFlagStyles = () => {
    const classes = [styles.ukraineFlag];
    if (size === "large") {
      classes.push(styles.ukraineFlagLarge);
    }
    return classes.join(" ");
  }

  const getNumberStartStyles = () => {
    const classes = [styles.numberStart];
    if (size === "large") {
      classes.push(styles.numberStartLarge);
    }
    return classes.join(" ");
  }

  return (
    <div className={styles.inputFormWrapper}>
      <span className={getInputTitleStyles()}>{title}</span>
      <div className={styles.inputWrapper}>
        <input
          name={name}
          required={required}
          className={getInputStyles()}
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {type === "tel" && (
          <div className={getPhoneNumberOverlayStyles()}>
            <img className={getUkraineFlagStyles()} src={ukraineFlagEmoji} />
            <span className={getNumberStartStyles()}>+380</span>
          </div>
        )}
      </div>
    </div>
  );
};
