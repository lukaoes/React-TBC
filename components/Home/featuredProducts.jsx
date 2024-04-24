import Card from "../cards/Card"
import { getDictionary } from "@/app/[lang]/dictionaries";

async function FeaturedProducts({products, lang}) {
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
