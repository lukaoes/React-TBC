import { Link } from "next-view-transitions";
import Image from "next/image";
import poor from "../../../../public/assets/images/poor.png";
import { getScopedI18n } from "../../../../locales/server";

const Cancel = async () => {
  const t = await getScopedI18n("orderStripe");

  return (
    <div className="cancel-page">
      <div className="order-cancelled">
        <h1>{t("cancel")}</h1>
        <Link href={"/products"}>{t("shop")}</Link>
      </div>
      <div className="order-cancelled-bottom">
        <Image src={poor} alt="brokeboy" width={500} height={500} />
      </div>
    </div>
  );
};

export default Cancel;
