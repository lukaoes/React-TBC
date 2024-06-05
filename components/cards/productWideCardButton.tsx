"use client";
import { FC, useEffect, useState } from "react";
import { ProductsDisplay } from "../../types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleAddToCart } from "../../actions";
import { getUserCart } from "../../api";

interface IProd {
  product: ProductsDisplay;
}

const ProductWideCardButton: FC<IProd> = ({ product }) => {
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
      {isInCart ? "კალათაშია" : "კალათაში დამატება"}
    </button>
  );
};

export default ProductWideCardButton;
