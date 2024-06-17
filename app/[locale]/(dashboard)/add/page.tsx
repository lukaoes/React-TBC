import Link from "next/link";
import camping from "../../../../public/assets/images/camping.png";
import shopping from "../../../../public/assets/images/shopping.png";
import Image from "next/image";
import { getScopedI18n } from "../../../../locales/server";

const Add = async () => {
  const t = await getScopedI18n("add");
  return (
    <div className="add-layout">
      <div className="add-container">
        <Link href="/add/product">
          <div>
            <h2>{t("product")}</h2>
            <p>{t("productDesc")}</p>
          </div>
          <Image
            src={shopping}
            alt="shopping"
            width={400}
            height={350}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
        <Link href="/add/campsite">
          <div>
            <h2>{t("campsite")}</h2>
            <p>{t("campsiteDesc")}</p>
            <Image
              src={camping}
              alt="camping"
              width={400}
              height={350}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Add;
