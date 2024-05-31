import ContactForm from "../../../../components/Contact/contactForm";
import ContactInfo from "../../../../components/Contact/contactInfo";
export const Contact = () => {
  return (
    <>
      <div className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
