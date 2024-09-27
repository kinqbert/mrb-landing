import { useState } from "react";
import styles from "./OrderForm.module.scss";
import { validateEmail, validatePhoneNumber } from "~/helpers/validation";
import { InputField } from "../InputField";

export const OrderForm = () => {
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

  return (
    <div className={styles.formWrapper}>
      <p className={styles.formHeadline}>
        Онлайн курс для б’юті майстрів. Як швидко знайти клієнтів без додаткових
        витрат.
      </p>
      <span className={styles.price}>490 UAH</span>
      <span className={styles.priceDiscounted}>1600 грн</span>
      <hr className={styles.separator} />
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
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
        <button type="submit" className={styles.submitButton}>
          Отримати доступ
        </button>
      </form>
    </div>
  );
};
