import Card from "../cards/Card"
import { getI18n } from "../../locales/server";

interface FeaturedProductsProps {
  products: {
    id: string;
    title: string;
    thumbnail: string;
    category: string;
    rating: number;
    stock: number;
    price: number;
  }[];
}
async function FeaturedProducts({products}: FeaturedProductsProps) {
  const t = await getI18n()

  return (
    <>
      {products.length > 0 ? (
        <Card cardData={products} />
      ) : (
        <p style={{ fontSize: '18px', fontWeight: '700'}}>{t('main.noItems')}</p>
      )}
    </>
  )
}

export default FeaturedProducts;
