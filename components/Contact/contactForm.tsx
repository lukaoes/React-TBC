"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { sendContactMessage } from "../../actions";
import { useScopedI18n } from "../../locales/client";

interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  number?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const t = useScopedI18n("contact");

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name) errors.name = "ჩაწერეთ სახელი.";
    if (!formData.email) errors.email = "ჩაწერეთ თქვენი მეილი.";
    if (!formData.number) errors.number = "ჩაწერეთ თქვენი ტელეფონის ნომერი";
    if (!formData.message) errors.message = "ჩაწერეთ შეტყობინება.";
    return errors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await sendContactMessage(formData);
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setErrors({ message: "An error occurred while sending the message." });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label htmlFor="name">{t("name")}</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={t("yourName")}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">{t("yourMail")}</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder={t("mail")}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="number">{t("mobileNumber")}</label>
        <input
          type="number"
          name="number"
          id="number"
          placeholder={t("number")}
          value={formData.number}
          onChange={handleChange}
        />
        {errors.number && <p>{errors.number}</p>}
      </div>
      <div>
        <label htmlFor="message">{t("message")}</label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder={t("writeYourMessage")}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <p>{errors.message}</p>}
      </div>
      <div className="contact-form-button">
        <button type="submit">{t("send")}</button>
      </div>
    </form>
  );
}
