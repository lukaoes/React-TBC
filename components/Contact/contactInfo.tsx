import ContactMap from "./contactMap";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2>საქართველო</h2>
      <h3>
        მისამართი: თბილისი, 1092.
        <br />
        987 ცოტნე დადიანის ქუჩა.
      </h3>
      <div className="contact-info-contact">
        <div>
          <h4>დაგვირეკეთ</h4>
          <p>+995 500 60 07 00</p>
          <p>+995 500 40 03 00</p>
        </div>
        <div>
          <h4>მოგვწერეთ</h4>
          <p>contact@ezoezo.ge</p>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default ContactInfo;
