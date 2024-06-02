import ProductsFilter from "../../../../components/Products/productsFilter";
import ProductsGrid from "../../../../components/Products/productsGrid";
import SecondHeader from "../../../../components/layout/secondHeader";
import products from "../../../../public/assets/images/secondHeader/products.jpg";

const Products = () => {
  return (
    <>
      <SecondHeader title="პროდუქტები" backgroundImage={products} />
      <div className="products-container">
        <ProductsFilter />
        <ProductsGrid />
      </div>
    </>
  );
};

export default Products;
