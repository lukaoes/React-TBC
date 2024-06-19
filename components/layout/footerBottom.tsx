import { getScopedI18n } from "../../locales/server";

const FooterBottom = async () => {
  const t = await getScopedI18n("footer");
  return (
    <div className="footer-bottom">
      <div>
        <span>© {t("ezoezo")} 2024</span>
        <span>●</span>
        <span>{t("allRightsReserved")}</span>
      </div>
    </div>
  );
};

export default FooterBottom;
