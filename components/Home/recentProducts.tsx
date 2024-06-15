import Link from "next/link";
import RecentProductsSlider from "./recentProductsSlider";
import { getUserProductsDisplay } from "../../actions";

const RecentProducts = async () => {
  const products = await getUserProductsDisplay();
  return (
    <div className="home-recent-products-container">
      <div className="recent-products-header">
        <div>
          <h3>ახალი პროდუქტები</h3>
        </div>
        <div>
          <Link href="/products">ყველას ნახვა</Link>
        </div>
      </div>
      <RecentProductsSlider products={products} />
    </div>
  );
};

export default RecentProducts;
