import { getUserProductsDisplay } from "../../../../actions";
import ProductsLayout from "../../../../components/Products/productsLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import { getI18n } from "../../../../locales/server";
import productss from "../../../../public/assets/images/secondHeader/productss.png";

const Products = async () => {
  const products = await getUserProductsDisplay();
  const t = await getI18n();
  return (
    <>
      <SecondHeader
        title={t("products.products")}
        backgroundImage={productss}
      />
      <ProductsLayout products={products} />
    </>
  );
};

export default Products;
