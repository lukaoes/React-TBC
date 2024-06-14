import { getUserProductsDisplay } from "../../../../actions";
import ProductsLayout from "../../../../components/Products/productsLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import productss from "../../../../public/assets/images/secondHeader/productss.png";

const Products = async () => {
  const products = await getUserProductsDisplay();
  return (
    <>
      <SecondHeader title="პროდუქტები" backgroundImage={productss} />
      <ProductsLayout products={products} />
    </>
  );
};

export default Products;
