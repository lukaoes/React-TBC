"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { handleProductRemove, handleQuantityChange } from "../../actions";
import CartTotal from "./cartTotal";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useCurrentLocale } from "../../locales/client";

interface CartProductsProps {
  filteredProducts: Product[];
  initialQuantities: Record<string, number>;
}

interface Product {
  id: string;
  title_ge: string;
  title_en: string;
  price: number;
  main_photo: string;
  quantity: number;
}

const CartProducts = ({
  filteredProducts,
  initialQuantities,
}: CartProductsProps) => {
  const locale = useCurrentLocale();
  const { user } = useUser();
  const [productQuantities, setProductQuantities] = useState(initialQuantities);
  const [localFilteredProducts, setLocalFilteredProducts] =
    useState(filteredProducts);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (user && user.sub) {
      setId(user.sub);
    }
  }, [user]);

  const updateQuantity = async (productId: string, quantityChange: number) => {
    const currentQuantity = productQuantities[productId] || 0;
    const product = localFilteredProducts.find((p) => p.id === productId);

    const newQuantity = currentQuantity + quantityChange;

    if (
      newQuantity < 0 ||
      (product?.quantity !== undefined && newQuantity > product.quantity)
    ) {
      return;
    }

    // Optimistically update the UI
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));

    setLoading((prevLoading) => ({ ...prevLoading, [productId]: true }));

    try {
      await handleQuantityChange(productId, quantityChange, id);
    } catch (error) {
      console.error("Failed to update quantity:", error);
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: currentQuantity,
      }));
    } finally {
      setLoading((prevLoading) => ({ ...prevLoading, [productId]: false }));
    }
  };

  const removeProduct = async (productId: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, [productId]: true }));
    try {
      setLocalFilteredProducts((prevProducts) =>
        prevProducts.filter((product) => product.id.toString() !== productId)
      );
      setProductQuantities((prevQuantities) => {
        const updatedQuantities = { ...prevQuantities };
        delete updatedQuantities[productId];
        return updatedQuantities;
      });

      await handleProductRemove(productId, id);
    } catch (error) {
      console.error("Failed to remove product:", error);
      setLocalFilteredProducts(filteredProducts);
      setProductQuantities(initialQuantities);
    } finally {
      setLoading((prevLoading) => ({ ...prevLoading, [productId]: false }));
    }
  };

  const calculateTotalPrice = () => {
    return localFilteredProducts.reduce((total, product) => {
      const quantity = productQuantities[product.id.toString()] || 0;
      return total + product.price * quantity;
    }, 0);
  };

  const calculateTotalItems = () => {
    return Object.values(productQuantities).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-products-list-container">
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
                      src={item.main_photo}
                      alt={item.title_en || item.title_ge}
                      width={60}
                      height={60}
                      className="cart-item-image-placeholder"
                    />
                    <div className="cart-item-details">
                      <span>
                        {locale === "ge"
                          ? item.title_ge
                            ? item.title_ge
                            : item.title_en
                          : item.title_en
                          ? item.title_en
                          : item.title_ge}
                      </span>
                    </div>
                  </div>
                  <div className="cart-item-price">${item.price}</div>
                  <div className="cart-item-quantity">
                    <div className="quant-changer">
                      <button
                        className="cart-item-quantity-btn"
                        onClick={() => updateQuantity(item.id.toString(), -1)}
                        disabled={loading[item.id.toString()]}
                      >
                        -
                      </button>
                      <span id={`qty-${item.id}`}>
                        {productQuantities[item.id?.toString()] || 0}
                      </span>
                      <button
                        className="cart-item-quantity-btn"
                        onClick={() => updateQuantity(item.id.toString(), 1)}
                        disabled={
                          loading[item.id.toString()] ||
                          (productQuantities[item.id.toString()] || 0) >=
                            item.quantity
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="quant-stock">
                      მარაგში: <span>{item.quantity}</span>
                    </div>
                  </div>
                  <div className="cart-item-subtotal">
                    $
                    {(
                      item.price * (productQuantities[item.id.toString()] || 0)
                    ).toFixed(2)}
                  </div>
                  <button
                    className="cart-item-remove-btn"
                    onClick={() => removeProduct(item.id.toString())}
                    disabled={loading[item.id.toString()]}
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CartTotal
        totalPrice={calculateTotalPrice()}
        selectedNumber={calculateTotalItems()}
      />
    </div>
  );
};

export default CartProducts;
