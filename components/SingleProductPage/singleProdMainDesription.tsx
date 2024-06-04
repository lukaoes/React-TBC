import { getCurrentLocale } from "../../locales/server";
import { Product } from "../../types";

interface IProduct {
  product: Product;
}

const SingleProdMainDescription = ({ product }: IProduct) => {
  const locale = getCurrentLocale();
  return (
    <div className="single-prod-main-description">
      <div className="small-details">
        <div>
          <span>ID: {product.id}</span>
          <span>{product.created_at.slice(0, 10)}</span>
        </div>
        <div>
          <span>{product.condition === "used" ? "მეორადი" : "ახალი"}</span>
          <span>{product.type === "sell" ? "იყიდება" : "ქირავდება"}</span>
        </div>
      </div>

      <h1 className="single-prod-main-title">
        {locale === "ge"
          ? product.title_ge
            ? product.title_ge
            : product.title_en
          : product.title_en
          ? product.title_en
          : product.title_ge}
      </h1>

      <p className="single-prod-main-desc">
        {" "}
        {locale === "ge"
          ? product.description_ge
            ? product.description_ge
            : product.description_en
          : product.description_en
          ? product.description_en
          : product.description_ge}
      </p>

      <div className="stock-and-stuff">
        {product.category && (
          <p>
            კატეგორია: <span>{product.category}</span>
          </p>
        )}
        {product.subcategory && (
          <p>
            ქვეკატეგორია: <span>{product.subcategory}</span>
          </p>
        )}
        {product.shoe_size && (
          <p>
            ფეხსაცმლის ზომა: <span>{product.shoe_size}</span>
          </p>
        )}
        {product.clothing_size && (
          <p>
            ტანსაცმლის ზომა: <span>{product.clothing_size}</span>
          </p>
        )}
        {product.backpack_capacity && (
          <p>
            ზურგჩანტთის მოცულობა: <span>{product.backpack_capacity} ლიტრი</span>
          </p>
        )}
        {product.tent_capacity && (
          <p>
            კარავის ტევადობა:{" "}
            <span>{product.tent_capacity.replace("-person", "")} ადამიანი</span>
          </p>
        )}
        {product.quantity && (
          <p>
            მარაგშია: <span>{product.quantity} ცალი</span>
          </p>
        )}
      </div>

      <div className="single-prod-main-price">
        <span>
          {product.negotiable
            ? "ფასი შეთანხმებით"
            : product.type === "sell"
            ? `${product.price} ₾`
            : `${product.price} ₾/დღე`}
        </span>
        <button>კალათში დამატება</button>
      </div>
    </div>
  );
};

export default SingleProdMainDescription;
