import { ArrowLeftCircled } from "~/assets/svg";
import styles from "./OrderPageContent.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputField } from "../common/InputField";

export const OrderPageContent = () => {
  const [emailFieldValue, setEmailFieldValue] = useState("");
  const [phoneNumberFieldValue, setPhoneNumberFieldValue] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const re = /^\d{9}$/;
    return re.test(phone);
  };

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
      // Make a POST request to a placeholder URL
      fetch("https://placeholder.url/api/submit", {
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
          // Handle success
          console.log("Success:", data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <p className={styles.formHeadline}>
          Онлайн курс для б’юті майстрів. Як швидко знайти клієнтів без
          додаткових витрат.
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
      <Link className={styles.arrowBackWrapper} to="..">
        <img src={ArrowLeftCircled} />
      </Link>
    </div>
  );
};
