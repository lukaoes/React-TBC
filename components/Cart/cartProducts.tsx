"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../../app/[locale]/(dashboard)/page";

interface CartProductsProps {
  filteredProducts: Product[];
  initialQuantities: Record<string, number>;
  handleQuantityChange: (productId: string, quantityChange: number) => void;
  handleProductRemove: (productId: string) => Promise<void>;
}

const CartProducts = ({
  filteredProducts,
  initialQuantities,
  handleQuantityChange,
  handleProductRemove,
}: CartProductsProps) => {
  const [productQuantities, setProductQuantities] = useState(initialQuantities);
  const [localFilteredProducts, setLocalFilteredProducts] =
    useState(filteredProducts);

  const updateQuantity = async (productId: string, quantityChange: number) => {
    const newQuantity = (productQuantities[productId] || 0) + quantityChange;

    // Call the parent function to update the backend
    await handleQuantityChange(productId, quantityChange);

    // Update the local state
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const removeProduct = async (productId: string) => {
    // Call the parent function to update the backend
    await handleProductRemove(productId);

    // Update the local state to remove the product
    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });

    // Update local filtered products
    setLocalFilteredProducts((prevProducts) =>
      prevProducts.filter((product) => product.id.toString() !== productId)
    );
  };

  return (
    <div>
      {localFilteredProducts.map((item: Product, index: number) => (
        <div key={`filteredProducss-${index}`}>
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={400}
          />
          <div className="cart-qty">
            <button onClick={() => updateQuantity(item.id.toString(), -1)}>
              −
            </button>
            <span id={`qty-${item.id}`}>
              {productQuantities[item.id?.toString()] || 0}
            </span>
            <button onClick={() => updateQuantity(item.id.toString(), 1)}>
              +
            </button>
            <button onClick={() => removeProduct(item.id.toString())}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
