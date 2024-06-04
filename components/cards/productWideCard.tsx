import Image from "next/image";
import { ProductsDisplay } from "../../types";
import { FC } from "react";
import { useCurrentLocale } from "../../locales/client";
import Link from "next/link";
import ProductWideCardButton from "./productWideCardButton";

type MainProductCardProps = {
  product: ProductsDisplay;
};

const ProductWideCard: FC<MainProductCardProps> = ({ product }) => {
  const locale = useCurrentLocale();
  return (
    <div className="product-wide-card">
      <Link
        href={`/products/${product.id}`}
        className="product-wide-card-image-container"
      >
        {product.main_photo ? (
          <Image
            src={product.main_photo}
            alt={product.title_en || product.title_ge}
            className="product-wide-card-image"
            width={300}
            height={300}
          />
        ) : (
          <svg
            fill="#000000"
            height="250px"
            width="50%"
            className="mx-[auto] my-[0]"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 490.667 490.667"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <path
                    d="M245.333,170.667c-1.088,0-2.133,0.085-3.968,0.299c-5.888,0.341-8.981,5.227-8.661,11.115s6.699,10.325,12.629,9.92
                  c29.397,0,53.333,23.936,53.248,54.059c-0.021,0.213-0.192,1.856-0.192,2.091c-0.32,5.739,4.053,10.005,9.792,10.496
                  c0.277,0.021,0.533,0.021,0.811,0.021c5.419,0,10.133-4.672,10.773-10.133c0.064-0.405,0.235-2.773,0.235-3.2
                  C320,204.16,286.507,170.667,245.333,170.667z"
                  />
                  <path
                    d="M245.333,0C110.059,0,0,110.059,0,245.333s110.059,245.333,245.333,245.333s245.333-110.059,245.333-245.333
                  S380.608,0,245.333,0z M245.333,469.333c-123.52,0-224-100.48-224-224c0-57.92,22.272-110.613,58.496-150.4l52.267,52.267
                  c-15.808,14.08-25.429,34.155-25.429,55.467V288c0,41.173,33.493,74.667,74.667,74.667h128c10.773,0,21.269-2.773,30.997-7.232
                  l55.403,55.403C355.947,447.061,303.253,469.333,245.333,469.333z M245.333,320c16.213,0,31.637-5.483,44.48-15.083
                  l34.176,34.176c-4.757,1.365-9.664,2.24-14.656,2.24h-128C151.936,341.333,128,317.397,128,288v-85.333
                  c0-15.893,7.061-30.315,19.072-40.491l38.677,38.677c-9.6,12.843-15.083,28.288-15.083,44.48
                  C170.667,286.507,204.16,320,245.333,320z M192,245.333c0-10.517,3.221-20.629,8.939-29.291l73.707,73.707
                  c-8.661,5.717-18.773,8.917-29.312,8.917C215.936,298.667,192,274.731,192,245.333z M410.816,395.755L94.912,79.851
                  c39.808-36.224,92.48-58.517,150.421-58.517c123.52,0,224,100.48,224,224C469.333,303.275,447.04,355.947,410.816,395.755z"
                  />
                  <path
                    d="M309.312,128h-12.48c-4.416-12.416-16.277-21.333-30.187-21.333h-42.667c-14.507,0-26.795,9.728-30.699,22.997
                  c-2.965,1.877-4.949,5.205-4.949,9.003c0,5.888,4.779,10.667,10.667,10.667h3.669c5.888,0,10.667-4.779,10.667-10.667
                  S218.112,128,224,128h42.667c5.888,0,10.667,4.779,10.667,10.667s4.779,10.667,10.667,10.667h21.333
                  c29.397,0,53.333,23.936,53.333,53.333V288c0,5.803-1.067,11.755-3.157,17.707c-1.941,5.568,0.981,11.648,6.528,13.611
                  c1.173,0.405,2.368,0.597,3.541,0.597c4.395,0,8.512-2.752,10.027-7.125c2.901-8.256,4.373-16.576,4.373-24.789v-85.333
                  C383.979,161.493,350.485,128,309.312,128z"
                  />
                </g>
              </g>
            </g>
          </svg>
        )}
      </Link>
      <div className="product-wide-card-right">
        <div className="product-wide-card-title">
          <Link href={`/products/${product.id}`}>
            <h2>
              {locale === "ge"
                ? product.title_ge
                  ? product.title_ge
                  : product.title_en
                : product.title_en
                ? product.title_en
                : product.title_ge}
            </h2>
          </Link>
          <span>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z"
                fill="#455A64"
              />
              <path
                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z"
                fill="#455A64"
              />
            </svg>
            {product.created_at.slice(0, 10)}
          </span>
        </div>
        <div className="product-wide-card-type">
          <span> {product.type === "sell" ? "იყიდება" : "ქირავდება"}</span>
          <h4>
            {product.category}, {product.subcategory ? product.subcategory : ""}
          </h4>
        </div>

        <p className="product-wide-description">
          {locale === "ge"
            ? product.description_ge
              ? product.description_ge
              : product.description_en
            : product.description_en
            ? product.description_en
            : product.description_ge}
        </p>
        <div className="product-wide-card-bottom">
          <div className="product-wide-card-bottom-left">
            <div>
              <span>ფასი</span>
              <p>
                {product.negotiable
                  ? "შეთანხმებით"
                  : product.type === "sell"
                  ? `${product.price} ₾`
                  : `${product.price} ₾/დღე`}
              </p>
            </div>
            <div>
              <span>კონდიცია</span>
              <p>{product.condition === "used" ? "მეორადი" : "ახალი"}</p>
            </div>
            <div>
              <span>ლოკაცია</span>
              <p>{product.location}</p>
            </div>
          </div>
          <ProductWideCardButton product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductWideCard;
