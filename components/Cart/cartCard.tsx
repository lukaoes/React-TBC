"use client";
import Image from "next/image";
import { CardProps } from "../cards/Card";
import { useEffect, useState } from "react";
import CartTotal from "./cartTotal";
import { useAppContext } from "../../context";

interface Product {
  id: number;
  count: number;
  product: CardProps;
}

const CartCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { setState } = useAppContext();

  useEffect(() => {
    const fetchProductsFromLocalStorage = () => {
      const storedProducts = localStorage.getItem("selectedProducts");
      if (storedProducts) {
        const parsedProducts = JSON.parse(storedProducts);
        setState(
          parsedProducts.reduce((acc: number, curr: any) => {
            return acc + curr.count;
          }, 0)
        );
        setProducts(
          parsedProducts.map((product: Product) => {
            const existingProduct = products.find((p) => p.id === product.id);
            if (existingProduct) {
              return { ...existingProduct, count: product.count };
            } else {
              return product;
            }
          })
        );
      }
    };

    fetchProductsFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleQuantityChange = (index: number, newCount: number) => {
    const updatedProducts = [...products];
    updatedProducts[index].count = newCount;
    setProducts(updatedProducts);
    setState(
      updatedProducts.reduce((acc: number, curr: any) => {
        return acc + curr.count;
      }, 0)
    );
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
  };

  const handleDelete = (index: number) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    setState(
      updatedProducts.reduce((acc: number, curr: any) => {
        return acc + curr.count;
      }, 0)
    );
    localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts));
  };

  const totalPrice = products.reduce((total, item) => {
    return total + item.product.price * item.count;
  }, 0);

  const totalSelectedProducts = products.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <div className="cart-details-layout">
      <div>
        {products.map((item: Product, index: number) => (
          <div className="cart-wrapper" id="card_0" key={`cart-item-${index}`}>
            <div className="cart-hero">
              <span>
                <Image
                  width={120}
                  height={120}
                  src={item.product.thumbnail}
                  alt={item.product.title}
                />
              </span>
            </div>
            <div className="cart-main">
              <div className="cart-text">
                <a href={`${item.product.id}`}>{item.product.title}</a>
                <div className="cart-pricing-checkout">
                  <h3>{item.product.price * item.count} ₾</h3>
                  {/* <span className="old-price">49.00 ₾</span>
                  <span className="sale">-20%</span> */}
                </div>
              </div>
              <div className="cart-stats">
                <div className="cart-qty">
                  <button
                    onClick={() =>
                      handleQuantityChange(index, Math.max(1, item.count - 1))
                    }
                  >
                    –{" "}
                  </button>
                  <input
                    type="number"
                    name="qty"
                    min="1"
                    max="11"
                    className="cart-qty_0"
                    value={item.count}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => handleQuantityChange(index, item.count + 1)}
                  >
                    +{" "}
                  </button>
                </div>
                <div className="cart-pricing ">
                  <h3 className="price">{item.product.price * item.count} ₾</h3>
                  {/* <span className="old-price">49.00 ₾</span>
                  <span className="sale">-20%</span> */}
                </div>
              </div>
            </div>
            <div className="cart-end">
              <button
                className="cart-delete"
                onClick={() => handleDelete(index)}
              >
                <svg
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.75H2.33333H13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M4.33398 3.74992V2.41659C4.33398 2.06296 4.47446 1.72382 4.72451 1.47378C4.97456 1.22373 5.3137 1.08325 5.66732 1.08325H8.33398C8.68761 1.08325 9.02674 1.22373 9.27679 1.47378C9.52684 1.72382 9.66732 2.06296 9.66732 2.41659V3.74992M11.6673 3.74992V13.0833C11.6673 13.4369 11.5268 13.776 11.2768 14.0261C11.0267 14.2761 10.6876 14.4166 10.334 14.4166H3.66732C3.3137 14.4166 2.97456 14.2761 2.72451 14.0261C2.47446 13.776 2.33398 13.4369 2.33398 13.0833V3.74992H11.6673Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div>
        {totalSelectedProducts > 0 ? (
          <CartTotal
            totalPrice={totalPrice}
            selectedNumber={totalSelectedProducts}
            localFilteredProducts={[]}
          />
        ) : (
          <h1>იტვირთება...(ან ცარიელია)</h1>
        )}
      </div>
    </div>
  );
};

export default CartCard;
