import Link from "next/link";
import { getSimilarProducts } from "../../actions";
import SimilarProductCard from "../cards/SimilarProductCard";

const SingleProdSimilar = async (category: any) => {
  const cate = String(category["category"]);
  const similarProds = await getSimilarProducts(cate);
  console.log(similarProds.products, "simiarlasdasdasd");
  return (
    <>
      <div className="single-prod-similar-title">
        <h1>მსგავსი პროდუქტები</h1>
        <Link href="/products">ყველა პროდუქტი</Link>
      </div>

      <SimilarProductCard products={similarProds.products} />
    </>
  );
};

export default SingleProdSimilar;
