import Card, { CardProps } from "../cards/Card";
import { getI18n } from "../../locales/server";

interface FeaturedProductsProps {
  products: CardProps[];
}
async function FeaturedProducts({ products }: FeaturedProductsProps) {
  const t = await getI18n();

  return (
    <>
      {products.length > 0 ? (
        <Card cardData={products} />
      ) : (
        <p style={{ fontSize: "18px", fontWeight: "700" }}>
          {t("main.noItems")}
        </p>
      )}
    </>
  );
}

export default FeaturedProducts;
