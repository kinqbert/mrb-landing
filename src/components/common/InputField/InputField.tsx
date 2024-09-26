import { ukraineFlagEmoji } from "~/assets/images";
import styles from "./InputField.module.scss";

interface Props {
  name: string;
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
    }
    if (error) {
      classes.push(styles.inputError);
    }
    return classes.join(" ");
  };

  return (
    <div className={styles.inputFormWrapper}>
      <span className={styles.inputTitle}>{title}</span>
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
          <div className={styles.phoneNumberOverlay}>
            <img src={ukraineFlagEmoji} className={styles.ukraineFlag} />
            <span className={styles.numberStart}>+380</span>
          </div>
        )}
      </div>
    </div>
  );
};
