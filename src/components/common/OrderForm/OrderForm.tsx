import { useState } from "react";
import styles from "./OrderForm.module.scss";
import { validateEmail, validatePhoneNumber } from "~/helpers/validation";
import { InputField } from "../InputField";

interface Props {
  variant?: "default" | "horizontal" | "large";
}

export const OrderForm = ({ variant = "default" }: Props) => {
  const [emailFieldValue, setEmailFieldValue] = useState("");
  const [phoneNumberFieldValue, setPhoneNumberFieldValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let valid = true;

    if (!emailFieldValue || !validateEmail(emailFieldValue)) {
      setEmailError(true);
      valid = false;
    } else {
      setEmailError(false);
    }

    if (!phoneNumberFieldValue || !validatePhoneNumber(phoneNumberFieldValue)) {
      setPhoneError(true);
      valid = false;
    } else {
      setPhoneError(false);
    }

    if (valid) {
      fetch("https://apiurl.url/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailFieldValue,
          phone_number: phoneNumberFieldValue,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  if (variant === "large") {
    return (
      <div className={styles.large__formWrapper}>
        <h3 className={styles.large__formHeadline}>
          Як стати майстром із забитим графіком із постійних клієнтів
        </h3>
        <p className={styles.large__formDescription}>
          Онлайн курс для б’юті майстрів. Як швидко знайти клієнтів без
          додаткових витрат.
        </p>
        <span className={styles.large__price}>490 UAH</span>
        <span className={styles.large__priceDiscounted}>1600 грн</span>
        <hr className={styles.large__separator} />
        <form className={styles.large__form} onSubmit={handleSubmit} noValidate>
          <div className={styles.large__inputFields}>
            <InputField
              name="email"
              size="large"
              value={emailFieldValue}
              onChange={setEmailFieldValue}
              title="Ваш email*"
              type="email"
              placeholder="username123@gmail.com"
              error={emailError}
            />
            <InputField
              name="phone_number"
              size="large"
              value={phoneNumberFieldValue}
              onChange={setPhoneNumberFieldValue}
              title="Телефон*"
              type="tel"
              placeholder="123456789"
              error={phoneError}
            />
          </div>

          <button type="submit" className={styles.large__submitButton}>
            Отримати доступ
          </button>
        </form>
      </div>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={styles.horizontal__formWrapper}>
        <div className={styles.horizontal__leftContent}>
          <form
            className={styles.horizontal__form}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.horizontal__inputFields}>
              <InputField
                name="email"
                size="large"
                value={emailFieldValue}
                onChange={setEmailFieldValue}
                title="Ваш email*"
                type="email"
                placeholder="username123@gmail.com"
                error={emailError}
              />
              <InputField
                name="phone_number"
                size="large"
                value={phoneNumberFieldValue}
                onChange={setPhoneNumberFieldValue}
                title="Телефон*"
                type="tel"
                placeholder="123456789"
                error={phoneError}
              />
            </div>

            <button type="submit" className={styles.horizontal__submitButton}>
              Отримати доступ
            </button>
          </form>
        </div>
        <div className={styles.horizontal__verticalSeparator}></div>
        <div className={styles.horizontal__rightContent}>
          <h3 className={styles.horizontal__rightContentTitle}>
            Як стати майстром із забитим графіком із постійних клієнтів
          </h3>
          <p className={styles.horizontal__rightContentDescription}>
            Онлайн курс для б’юті майстрів. Як швидко знайти клієнтів без
            додаткових витрат.
          </p>
          <span className={styles.horizontal__price}>490 UAH</span>
          <span className={styles.horizontal__priceDiscounted}>1600 грн</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.default__formWrapper}>
      <p className={styles.default__formHeadline}>
        Онлайн курс для б’юті майстрів. Як швидко знайти клієнтів без додаткових
        витрат.
      </p>
      <span className={styles.default__price}>490 UAH</span>
      <span className={styles.default__priceDiscounted}>1600 грн</span>
      <hr className={styles.default__separator} />
      <form className={styles.default__form} onSubmit={handleSubmit} noValidate>
        <InputField
          name="email"
          value={emailFieldValue}
          onChange={setEmailFieldValue}
          title="Ваш email*"
          type="email"
          placeholder="username123@gmail.com"
          error={emailError}
        />
        <InputField
          name="phone_number"
          value={phoneNumberFieldValue}
          onChange={setPhoneNumberFieldValue}
          title="Телефон*"
          type="tel"
          placeholder="123456789"
          error={phoneError}
        />
        <button type="submit" className={styles.default__submitButton}>
          Отримати доступ
        </button>
      </form>
    </div>
  );
};
