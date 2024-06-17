import ContactForm from "../../../../components/Contact/contactForm";
import ContactInfo from "../../../../components/Contact/contactInfo";
import SecondHeader from "../../../../components/layout/secondHeader";
import { getI18n } from "../../../../locales/server";
import contact from "../../../../public/assets/images/secondHeader/contact.png";
const Contact = async () => {
  const t = await getI18n();
  return (
    <>
      <SecondHeader title={t("contact.contact")} backgroundImage={contact} />

      <div className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
