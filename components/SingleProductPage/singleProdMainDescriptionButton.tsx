"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleAddToCart } from "../../actions";
import { ProductsDisplay } from "../../types";
import { BASE_URL, getUserCart } from "../../api";
import { useI18n } from "../../locales/client";
import { useRouter } from "next/navigation";

interface IProd {
  product: ProductsDisplay;
}

const SingleProdMainDescriptionButton: FC<IProd> = ({ product }) => {
  const { user } = useUser();
  const [id, setId] = useState("");
  const [isInCart, setIsInCart] = useState(false);
  const router = useRouter();
  const t = useI18n();

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
    if (!user) {
      router.push(`${BASE_URL}/api/auth/login`);
      return;
    }
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
    <button disabled={isInCart || product.negotiable} onClick={handleClick}>
      {isInCart ? t("singleProd.alreadyInCart") : t("singleProd.addToCart")}
    </button>
  );
};

export default SingleProdMainDescriptionButton;
