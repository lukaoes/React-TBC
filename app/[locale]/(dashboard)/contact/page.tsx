import ContactForm from "../../../../components/Contact/contactForm";
import ContactInfo from "../../../../components/Contact/contactInfo";
import SecondHeader from "../../../../components/layout/secondHeader";
import contact from "../../../../public/assets/images/secondHeader/contact.png";
const Contact = () => {
  return (
    <>
      <SecondHeader title={"კონტაქტი"} backgroundImage={contact} />

      <div className="contact-layout">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
