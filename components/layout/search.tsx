"use client";
import { useState, useEffect, useCallback } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import {
  getBlogDisplay,
  getCampsitesDisplay,
  getUserProductsDisplay,
} from "../../actions";
import { useScopedI18n } from "../../locales/client";

const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let debounceTimer: NodeJS.Timeout;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
};

type Product = {
  id: number;
  title_ge: string | null;
  title_en: string | null;
  price?: string;
  main_photo: string;
};

type Blog = {
  id: number;
  title: string;
  main_photo: string;
};

type Campsite = {
  id: number;
  name: string;
  price?: string;
  main_photo: string;
};

type Item = Product | Blog | Campsite;

interface iProp {
  handleClose: () => void;
}

const Search = ({ handleClose }: iProp) => {
  const [category, setCategory] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  const t = useScopedI18n("search");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchResults = useCallback(
    debounce(async (category: string) => {
      let fetchedResults: Item[] = [];
      if (category === "products") {
        fetchedResults = await getUserProductsDisplay();
      } else if (category === "blog") {
        fetchedResults = await getBlogDisplay();
      } else if (category === "campsites") {
        fetchedResults = await getCampsitesDisplay();
      }
      setAllItems(fetchedResults);
      setResults([]);
    }, 500),
    []
  );

  useEffect(() => {
    if (category) {
      fetchResults(category);
    } else {
      setResults([]);
    }
  }, [category, fetchResults]);

  useEffect(() => {
    if (query.length >= 2) {
      const filteredResults = allItems.filter((item) => {
        if ("title" in item) {
          return item.title.toLowerCase().includes(query.toLowerCase());
        } else if ("title_ge" in item && "title_en" in item) {
          return (
            (item.title_ge &&
              item.title_ge.toLowerCase().includes(query.toLowerCase())) ||
            (item.title_en &&
              item.title_en.toLowerCase().includes(query.toLowerCase()))
          );
        } else if ("name" in item) {
          return item.name.toLowerCase().includes(query.toLowerCase());
        }
        return false;
      });
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [query, allItems]);

  return (
    <>
      <div className="search-layout">
        <div className="select-search">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setQuery("");
              setResults([]);
            }}
          >
            <option disabled value="">
              {t("category")}
            </option>
            <option value="products">{t("products")}</option>
            <option value="campsites">{t("campsites")}</option>
            <option value="blog">{t("blogs")}</option>
          </select>
          <input
            type="text"
            placeholder={t("search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={!category}
            list="auto-complete-list"
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 17.5L13.875 13.875"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <datalist id="auto-complete-list">
            {results.map((item) => (
              <option
                key={item.id}
                // @ts-ignore
                value={
                  "title" in item
                    ? item.title
                    : "name" in item
                    ? item.name
                    : "title_ge" in item
                    ? item.title_ge
                    : ""
                }
              />
            ))}
          </datalist>
        </div>
        <div className="quick-search">
          <span>{t("quickSearch")}:</span>
          <div>
            <Link href="/products" onClick={handleClose}>
              {t("products")}
            </Link>
            <Link href="/campsites" onClick={handleClose}>
              {t("campsites")}
            </Link>
            <Link href="/blog" onClick={handleClose}>
              {t("blogs")}
            </Link>
          </div>
        </div>
        <div className="searched-products">
          <h1>
            {t("searched")}{" "}
            {category === "products"
              ? t("products")
              : category === "campsites"
              ? t("campsites")
              : category === "blog"
              ? t("blogs")
              : ""}{" "}
            :{/* {category.charAt(0).toUpperCase() + category.slice(1)}: */}
          </h1>
          <div className="searched-products-cards-container">
            {results.map((item) => (
              <div key={`searched-items-${item.id}`}>
                <Link href={`/${category}/${item.id}`} onClick={handleClose}>
                  <Image
                    src={item.main_photo}
                    alt="product card"
                    width={150}
                    height={150}
                  />
                  <p>
                    {"title" in item
                      ? item.title.slice(0, 34)
                      : "name" in item
                      ? item.name.slice(0, 34)
                      : "title_ge" in item
                      ? item.title_ge
                        ? item.title_ge.slice(0, 34)
                        : item.title_ge
                      : ""}
                    ...
                  </p>
                  {"price" in item && item.price && <span>{item.price}</span>}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
