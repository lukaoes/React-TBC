import { getDictionary } from "../../app/[lang]/dictionaries";
import Card from "../cards/Card"

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
  lang: string;
}
async function FeaturedProducts({products, lang}: FeaturedProductsProps) {
  const dict = await getDictionary(lang)

  return (
    <>
      {products.length > 0 ? (
        <Card cardData={products} lang={lang} />
      ) : (
        <p style={{ fontSize: '18px', fontWeight: '700'}}>{dict.main.noItems}</p>
      )}
    </>
  )
}

export default FeaturedProducts;
