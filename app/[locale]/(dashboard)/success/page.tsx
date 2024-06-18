import { Link } from "next-view-transitions";
import Image from "next/image";
import rich from "../../../../public/assets/images/rich.png";
import { getScopedI18n } from "../../../../locales/server";

const Cancel = async () => {
  const t = await getScopedI18n("orderStripe");
  return (
    <div className="cancel-page">
      <div className="order-received">
        <h1>{t("success")}</h1>
        <Link href={"/profile/orders"}>{t("orders")}</Link>
      </div>
      <div className="order-cancelled-bottom">
        <Image src={rich} alt="richboy" width={500} height={500} />
      </div>
    </div>
  );
};

export default Cancel;
