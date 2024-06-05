"use client";
import { FC, useEffect, useState } from "react";
import { ProductsDisplay } from "../../types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleAddToCart } from "../../actions";
import { getUserCart } from "../../api";

interface IProd {
  product: ProductsDisplay;
}

const MainProductCardButton: FC<IProd> = ({ product }) => {
  const { user } = useUser();
  const [id, setId] = useState("");
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (user && user.sub) {
      setId(user.sub);
      fetchUserCart(user.sub);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchUserCart = async (userId: string) => {
    try {
      const cart = await getUserCart(userId);
      const isProductInCart = cart.products.hasOwnProperty(product.id);
      setIsInCart(isProductInCart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  const handleClick = async () => {
    try {
      setIsInCart(true);
      await handleAddToCart(String(product.id), id);
      fetchUserCart(id);
    } catch (error) {
      setIsInCart(false);
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <button disabled={isInCart} onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 9.24971H18.401L14.624 3.58371C14.394 3.23871 13.927 3.14471 13.584 3.37571C13.239 3.60571 13.146 4.07071 13.376 4.41571L16.599 9.24971H7.401L10.624 4.41571C10.854 4.07071 10.761 3.60571 10.416 3.37571C10.071 3.14571 9.606 3.23871 9.376 3.58371L5.599 9.24971H3C2.586 9.24971 2.25 9.58571 2.25 9.99971C2.25 10.4137 2.586 10.7497 3 10.7497H3.385L4.943 18.5387C5.199 19.8197 6.333 20.7497 7.64 20.7497H16.361C17.668 20.7497 18.801 19.8197 19.058 18.5387L20.616 10.7497H21.001C21.415 10.7497 21.751 10.4137 21.751 9.99971C21.751 9.58571 21.414 9.24971 21 9.24971ZM17.586 18.2447C17.469 18.8267 16.954 19.2497 16.36 19.2497H7.64C7.046 19.2497 6.531 18.8267 6.414 18.2447L4.915 10.7497H19.085L17.586 18.2447Z"
          fill={isInCart ? "lightgreen" : "white"}
        />
        <path
          d="M14.75 14V16C14.75 16.414 14.414 16.75 14 16.75C13.586 16.75 13.25 16.414 13.25 16V14C13.25 13.586 13.586 13.25 14 13.25C14.414 13.25 14.75 13.586 14.75 14ZM10 13.25C9.586 13.25 9.25 13.586 9.25 14V16C9.25 16.414 9.586 16.75 10 16.75C10.414 16.75 10.75 16.414 10.75 16V14C10.75 13.586 10.414 13.25 10 13.25Z"
          fill={isInCart ? "lightgreen" : "white"}
        />
      </svg>
    </button>
  );
};

export default MainProductCardButton;
