"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "../../app/[locale]/(dashboard)/page";
import { handleProductRemove, handleQuantityChange } from "../../actions";

interface CartProductsProps {
  filteredProducts: Product[];
  initialQuantities: Record<string, number>;
}

const CartProducts = ({
  filteredProducts,
  initialQuantities,
}: CartProductsProps) => {
  const [productQuantities, setProductQuantities] = useState(initialQuantities);
  const [localFilteredProducts, setLocalFilteredProducts] =
    useState(filteredProducts);

  const updateQuantity = async (productId: string, quantityChange: number) => {
    const newQuantity = (productQuantities[productId] || 0) + quantityChange;

    await handleQuantityChange(productId, quantityChange);

    if (newQuantity <= 0) {
      await removeProduct(productId);
    } else {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: newQuantity,
      }));
    }
  };

  const removeProduct = async (productId: string) => {
    await handleProductRemove(productId);

    setProductQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });

    setLocalFilteredProducts((prevProducts) =>
      prevProducts.filter((product) => product.id.toString() !== productId)
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-header-item">Product</div>
        <div className="cart-header-item">Price</div>
        <div className="cart-header-item">Quantity</div>
        <div className="cart-header-item">Subtotal</div>
      </div>
      {localFilteredProducts.map((item: Product, index: number) => (
        <div key={`filteredProducts-${index}`}>
          <div>
            <div className="cart-item">
              <div className="cart-item-row">
                <div className="cart-item-product">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="cart-item-image-placeholder"
                  />
                  <div className="cart-item-details">
                    <span>{item.title}</span>
                  </div>
                </div>
                <div className="cart-item-price">${item.price}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() => updateQuantity(item.id.toString(), -1)}
                  >
                    -
                  </button>
                  <span id={`qty-${item.id}`}>
                    {productQuantities[item.id?.toString()] || 0}
                  </span>
                  <button
                    className="cart-item-quantity-btn"
                    onClick={() => updateQuantity(item.id.toString(), 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-subtotal">${item.price}</div>
                <button
                  className="cart-item-remove-btn"
                  onClick={() => removeProduct(item.id.toString())}
                >
                  ×
                </button>
              </div>
            </div>
          </div>
          {/* <h2>{item.title}</h2>
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
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
