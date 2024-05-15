"use client";
import { useEffect, useReducer } from "react";
import Image from "next/image";
import { useI18n } from "../../locales/client";
import FeaturedCardButton from "../Home/featuredCardButton";
import { useLocalStorage } from "../../hooks";

export interface CardProps {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  rating: number;
  stock: number;
  price: number;
}

interface SelectedProduct {
  id: number;
  product: CardProps;
  count: number;
}

const initialState: SelectedProduct[] = [];

type Action =
  | { type: "INCREMENT"; payload: CardProps }
  | { type: "DECREMENT"; payload: CardProps }
  | { type: "RESET" };

function reducer(state: SelectedProduct[], action: Action) {
  switch (action.type) {
    case "INCREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload.id
      );

      if (selectedProductIdx === -1)
        return [
          ...state,
          { id: action.payload.id, product: action.payload, count: 1 },
        ];

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];
      const updatedSelectedProduct = {
        ...selectedProduct,
        count: selectedProduct.count + 1,
      };
      clone[selectedProductIdx] = updatedSelectedProduct;
      return clone;
    }
    case "DECREMENT": {
      const selectedProductIdx = state.findIndex(
        (p) => p.id === action.payload.id
      );

      if (selectedProductIdx === -1) return state;

      const clone = [...state];
      const selectedProduct = clone[selectedProductIdx];

      if (selectedProduct.count === 1) {
        clone.splice(selectedProductIdx, 1);
      } else {
        const updatedSelectedProduct = {
          ...selectedProduct,
          count: selectedProduct.count - 1,
        };
        clone[selectedProductIdx] = updatedSelectedProduct;
      }

      return clone;
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function Card({ cardData }: { cardData: CardProps[] }) {
  const [selectedProducts, dispatch] = useReducer(reducer, initialState);
  const [cachedProducts, setCachedProducts] = useLocalStorage(
    "selectedProducts",
    initialState
  );
  const t = useI18n();

  useEffect(() => {
    if (cachedProducts.length > 0) {
      cachedProducts.forEach((product: { product: any }) =>
        dispatch({ type: "INCREMENT", payload: product.product })
      );
    }
  }, []);

  useEffect(() => {
    setCachedProducts(selectedProducts);
  }, [selectedProducts, setCachedProducts]);

  const handleClick = async (product: CardProps) => {
    dispatch({ type: "INCREMENT", payload: product });
  };

  return (
    <>
      {cardData.map((item, index) => (
        <div key={`feat-card-${index}`} className="featured-card">
          <a href={String(item.id)}>
            <Image
              className="featured-card_img"
              width={600}
              height={200}
              src={item.thumbnail}
              alt={item.title}
            />
          </a>
          <div className="featured-card_joint"></div>
          <div className="featured-card_info">
            <a href={String(item.id)}>
              <h4>{item.title}</h4>
              <div className="cate-rating">
                <span>
                  <span>{t("main.category")}:</span>
                  {item.category}
                </span>
                <span>
                  ⭐ {item.rating} ({item.stock})
                </span>
              </div>
            </a>
            <div className="price-cart">
              <span>${item.price}</span>
              <FeaturedCardButton product={item} handleClick={handleClick} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
