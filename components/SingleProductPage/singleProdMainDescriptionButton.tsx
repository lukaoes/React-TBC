"use client";
import { FC, useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { handleAddToCart } from "../../actions";
import { ProductsDisplay } from "../../types";

interface IProd {
  product: ProductsDisplay;
}

const SingleProdMainDescriptionButton: FC<IProd> = ({ product }) => {
  const { user } = useUser();
  const [id, setId] = useState("");
  console.log(id);
  useEffect(() => {
    if (user && user.sub) {
      setId(user.sub);
    }
  }, [user]);
  return (
    <button onClick={() => handleAddToCart(String(product.id), id)}>
      კალათაში დამატება
    </button>
  );
};

export default SingleProdMainDescriptionButton;
