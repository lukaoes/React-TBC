"use client";
import React from "react";
import { handleAddToCart } from "../../actions";

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ productId }) => {
  return (
    <button onClick={() => handleAddToCart(productId)}>Add to Cart</button>
  );
};

export default AddToCartButton;
