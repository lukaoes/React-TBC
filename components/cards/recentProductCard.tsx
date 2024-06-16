import Image from "next/image";
import Link from "next/link";
import { ProductsDisplay } from "../../types";
import { useCurrentLocale, useI18n } from "../../locales/client";

interface IProd {
  product: ProductsDisplay;
}

const RecentProductCard = async ({ product }: IProd) => {
  const locale = useCurrentLocale();
  const t = useI18n();
  const name =
    locale === "ge"
      ? product.title_ge
        ? product.title_ge
        : product.title_en
      : product.title_en
      ? product.title_en
      : product.title_ge;
  return (
    <div className="recent-product-card">
      <div className="recent-product-card-type">
        {product.type === "sell" ? t("main.forSale") : t("main.forRent")}
      </div>
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.main_photo}
          alt={product.title_en}
          width={1000}
          height={1000}
        />
        <div>
          <span className="flex gap-2 items-center">
            <svg
              fill="#455A64"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="15px"
              height="15px"
              viewBox="0 0 395.71 395.71"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                  c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                  C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                  c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                />
              </g>
            </svg>
            {product.location}
          </span>
          <h2>
            {name.slice(0, 20)} {name.slice().length > 20 ? "..." : ""}
          </h2>
          <h3>
            {product.negotiable
              ? t("camping.negotiable")
              : product.type === "sell"
              ? `${product.price} ₾`
              : `${product.price} ₾/${t("main.perDay")}`}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default RecentProductCard;
