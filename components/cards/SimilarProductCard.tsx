import Image from "next/image";

const SimilarProductCard = () => {
  return (
    <div className="similar-product-card">
      <Image src="" alt="product" width={400} height={400} />
      <div className="single-product-card-info">
        <h3>მაგარი კარავია ძმაუ</h3>
        <span>₾ 201</span>
      </div>
    </div>
  );
};

export default SimilarProductCard;
