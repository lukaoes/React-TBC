import Link from "next/link";
import { getSimilarProducts } from "../../actions";
import SimilarProductCard from "../cards/SimilarProductCard";
type ParamsWithIdAndCategory = {
  sameId: { sameId: number };
  category: { category: string };
};
const SingleProdSimilar = async (data: ParamsWithIdAndCategory) => {
  const { sameId, category } = data;
  const similarProds = await getSimilarProducts(
    String(category),
    Number(sameId)
  );
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
