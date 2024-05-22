"use client";
import React from "react";
import { handleAddToCart } from "../../actions";
import Image from "next/image";
import cart from "../../public/assets/images/cart.svg";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  return (
    <button onClick={() => handleAddToCart(productId)}>
      <Image src={cart} alt="cart" width={25} height={25} />
    </button>
  );
};

export default AddToCartButton;
