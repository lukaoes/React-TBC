import { getUserProductsDisplay } from "../../../../actions";
import ProductsFilter from "../../../../components/Products/productsFilter";
import ProductsGrid from "../../../../components/Products/productsGrid";
import SecondHeader from "../../../../components/layout/secondHeader";
import productPageImage from "../../../../public/assets/images/secondHeader/products.jpg";

const Products = async () => {
  const products = await getUserProductsDisplay();
  return (
    <>
      <SecondHeader title="პროდუქტები" backgroundImage={productPageImage} />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default Products;
