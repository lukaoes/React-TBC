import { getScopedI18n } from "../../locales/server";
import ContactMap from "./contactMap";

const ContactInfo = async () => {
  const t = await getScopedI18n("contact");
  return (
    <div className="contact-info">
      <h2>{t("gerogia")}</h2>
      <h3>
        {t("address")}
        <br />
        {t("addressTwo")}
      </h3>
      <div className="contact-info-contact">
        <div>
          <h4>{t("callUs")}</h4>
          <p>+995 500 60 07 00</p>
          <p>+995 500 40 03 00</p>
        </div>
        <div>
          <h4>{t("textUs")}</h4>
          <p>contact@ezoezo.ge</p>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default ContactInfo;
