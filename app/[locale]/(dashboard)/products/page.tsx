import { getUserProductsDisplay } from "../../../../actions";
import ProductsLayout from "../../../../components/Products/productsLayout";
import SecondHeader from "../../../../components/layout/secondHeader";
import productPageImage from "../../../../public/assets/images/secondHeader/products.jpg";

const Products = async () => {
  const products = await getUserProductsDisplay();
  return (
    <>
      <SecondHeader title="პროდუქტები" backgroundImage={productPageImage} />
      <ProductsLayout products={products} />
    </>
  );
};

export default Products;
