"use client";
import React, { useState, useEffect } from "react";
import { deleteSingleProduct, getUserProductsDisplay } from "../../actions";
import { ProductsDisplay } from "../../types";
import SingleProdEditModal from "../SingleProductPage/singleProdEditModal";
import { getSingleProduct } from "../../actions";
import { Link } from "next-view-transitions";

const AdminProductsTable = () => {
  const [displayProds, setDisplayProds] = useState<ProductsDisplay[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductsDisplay | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getUserProductsDisplay();
      setDisplayProds(products);
    };

    fetchProducts();
  }, []);

  const handleEditClick = async (id: number) => {
    const product = await getSingleProduct(id.toString());
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async (id: number) => {
    try {
      await deleteSingleProduct(id);
      // setDisplayProds((prevProds) =>
      //   prevProds.filter((prod) => prod.id !== id)
      // );
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSave = (updatedProduct: ProductsDisplay) => {
    setDisplayProds((prevProds) =>
      prevProds.map((prod) =>
        prod.id === updatedProduct.id ? updatedProduct : prod
      )
    );
    handleCloseModal();
  };

  return (
    <div className="admin-table">
      <div className="row admin-table-header blue">
        <div className="cell">ID</div>
        <div className="cell">სახელი</div>
        <div className="cell">კატეგორია</div>
        <div className="cell">მდებარეობა</div>
        <div className="cell">edit</div>
        <div className="cell">წაშლა</div>
      </div>
      {displayProds.map((product, index) => (
        <div className="row" key={`product-admin-${index}`}>
          <div className="cell" data-title="ID">
            {product.id}
          </div>
          <div className="cell" data-title="სახელი">
            <Link href={`/products/${product.id}`}>
              {product.title_ge || product.title_en}
            </Link>
          </div>
          <div className="cell" data-title="კატეგორია">
            {product.category}
          </div>
          <div className="cell" data-title="მდებარეობა">
            {product.location}
          </div>
          <div className="cell" data-title="edit">
            <button onClick={() => handleEditClick(product.id)}>edit</button>
          </div>
          <div className="cell" data-title="წაშლა">
            <button onClick={() => handleDeleteClick(product.id)}>del</button>
          </div>
        </div>
      ))}
      {isModalOpen && selectedProduct && (
        <SingleProdEditModal
          // @ts-ignore
          product={selectedProduct[0]}
          onClose={handleCloseModal} // @ts-ignore
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdminProductsTable;
