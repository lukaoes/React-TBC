"use client";
import { FC, useEffect, useState } from "react";
import { ProductsDisplay } from "../../types";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleAddToCart } from "../../actions";
import { getUserCart } from "../../api";
import { revalidatePath } from "next/cache";
import { useI18n } from "../../locales/client";

interface IProd {
  product: ProductsDisplay;
}

const MainProductCardModalButton: FC<IProd> = ({ product }) => {
  const t = useI18n();
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
      revalidatePath("/products");
    } catch (error) {
      setIsInCart(false);
      console.error("Error adding item to cart:", error);
    }
  };
  return (
    <button disabled={isInCart} onClick={handleClick}>
      {isInCart ? t("products.alreadyInCart") : t("products.addToCart")}
    </button>
  );
};

export default MainProductCardModalButton;
