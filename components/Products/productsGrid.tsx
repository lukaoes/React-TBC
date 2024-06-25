import { FC } from "react";
import { ProductsDisplay } from "../../types";
import MainProductCard from "../cards/mainProductCard";
import ProductWideCard from "../cards/productWideCard";
import { useI18n } from "../../locales/client";

type ProductsGridProps = {
  gridView: boolean;
  openModal: (product: ProductsDisplay) => void;
  products: ProductsDisplay[];
  visibleCount: number;
  loadMoreProducts: () => void;
};

const ProductsGrid: FC<ProductsGridProps> = ({
  products,
  gridView,
  openModal,
  visibleCount,
  loadMoreProducts,
}) => {
  const t = useI18n();
  return (
    <div className="products-gird-main-container">
      {gridView ? (
        <div className="products-grid-container">
          {products.slice(0, visibleCount).map((product, index) => (
            <div className="grid-product" key={`display-products-${index}`}>
              <MainProductCard
                product={product}
                openModal={() => openModal(product)}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="products-wide-display-container">
          {products.slice(0, visibleCount).map((product, index) => (
            <div key={`display-products-wide-${index}`}>
              <ProductWideCard product={product} />
            </div>
          ))}
        </div>
      )}
      <div className="see-more-button-container">
        {visibleCount < products.length && (
          <button onClick={loadMoreProducts} className="see-more-button">
            {t("products.seeMore")}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductsGrid;
