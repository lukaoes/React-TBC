"use client";
import React from "react";

interface AddToCartButtonProps {
  productId: string;
  handleAddToCart: (productId: string) => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  handleAddToCart,
}) => {
  return (
    <button onClick={() => handleAddToCart(productId)}>Add to Cart</button>
  );
};

export default AddToCartButton;
