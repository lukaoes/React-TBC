import Link from "next/link";
import SimilarProductCard from "../cards/SimilarProductCard";

const SingleProdSimilar = () => {
  return (
    <>
      <div className="single-prod-similar-title">
        <h1>მსგავსი პროდუქტები</h1>
        <Link href="/products">ყველა პროდუქტი</Link>
      </div>
      <div className="single-prod-similar">
        <SimilarProductCard />
        <SimilarProductCard />
        <SimilarProductCard />
        <SimilarProductCard />
      </div>
    </>
  );
};

export default SingleProdSimilar;
