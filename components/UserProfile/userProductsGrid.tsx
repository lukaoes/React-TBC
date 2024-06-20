"use client";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ProductsDisplay } from "../../types";
import { FC } from "react";
import { useCurrentLocale, useI18n } from "../../locales/client";

interface IProd {
  products: ProductsDisplay;
}

const UserProductsGrid: FC<IProd> = ({ products }) => {
  const locale = useCurrentLocale();
  const t = useI18n();
  return (
    <div className="user-profile-products-grid">
      {products.map((products: ProductsDisplay, index: number) => (
        <div
          className="user-profile-products-card"
          key={`user-products-profile-${index}`}
        >
          <Link href={`/products/${products.id}`}>
            <Image
              src={products.main_photo}
              alt={products.title_en}
              width={800}
              height={800}
            />
          </Link>
          <Link href={`/products/${products.id}`}>
            {locale === "ge"
              ? products.title_ge
                ? products.title_ge
                : products.title_en
              : products.title_en
              ? products.title_en
              : products.title_ge}
          </Link>
          {products.negotiable == true ? (
            <p>{t("userProfile.negotiable")}</p>
          ) : (
            <p>
              {products.type === "sell"
                ? `${products.price} ₾`
                : `${products.price} ₾/${t("userProfile.day")}`}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserProductsGrid;
