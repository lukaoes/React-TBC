"use client";

import { useRouter } from "next/navigation";
import { deleteSingleProduct } from "../../actions";
import { Product } from "../../types";

interface EditModalProps {
  product: Product;
  onClose: () => void;
}

const SingleProdRemoveModal = ({ product, onClose }: EditModalProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteSingleProduct(product.id);
      router.push("/products");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="single-product-edit-modal">
      <div className="single-product-edit-content">
        <h2>ნამდვილად გსურთ პროდუქტის წაშლა?</h2>
        <p>
          ამ ქმედებას უკან ვერ დააბრუნებთ და პროდუქტის აღდგენაც ვერ მოხდება.
        </p>
        <div className="single-prod-remove-modal">
          <button onClick={onClose}>გათიშვა</button>
          <button onClick={handleDelete}>წაშლა</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProdRemoveModal;
