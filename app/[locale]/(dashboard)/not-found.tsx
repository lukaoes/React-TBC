import { Link } from "next-view-transitions";
import LogoSvg from "../../../components/layout/LogoSvg";
import { getScopedI18n } from "../../../locales/server";

const NotFoundPage = async () => {
  const t = await getScopedI18n("notFound");
  return (
    <div>
      <div className="background-404">
        <div className="container-404">
          <div className="logo">
            <LogoSvg />
          </div>
          <h1>{t("top")}</h1>
          <p>{t("middle")}</p>
          <Link href="/">{t("bottom")}</Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default NotFoundPage;
