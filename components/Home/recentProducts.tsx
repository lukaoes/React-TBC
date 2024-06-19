import Link from "next/link";
import RecentProductsSlider from "./recentProductsSlider";
import { getUserProductsDisplay } from "../../actions";
import { getScopedI18n } from "../../locales/server";

const RecentProducts = async () => {
  const t = await getScopedI18n("main");
  const products = await getUserProductsDisplay();
  return (
    <div className="home-recent-products-container">
      <div className="recent-products-header">
        <div>
          <h1>აღმოაჩინე</h1>
          <h3>{t("newProducts")}</h3>
        </div>
        <div></div>
      </div>
      <RecentProductsSlider products={products} />
      <div className="home-see-all">
        <Link href="/products">{t("seeAll")}</Link>
      </div>
    </div>
  );
};

export default RecentProducts;
