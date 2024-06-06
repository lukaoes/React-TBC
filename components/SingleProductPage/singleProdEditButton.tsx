"use client";

import { FC, useState } from "react";
import SingleProdEditModal from "./singleProdEditModal";
import { Product } from "../../types";
import { useUser } from "@auth0/nextjs-auth0/client";

interface IProd {
  product: Product;
}

const SingleProdEditButton: FC<IProd> = ({ product }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product>(product);
  const { user } = useUser();

  const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");
  const isProductOwner = user?.sub === product.user_id;

  if (!isAdmin && !isProductOwner) {
    return null;
  }

  if (isEditModalOpen && typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const handleEditClick = () => {
    setEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
  };

  const handleSaveProduct = (updatedProduct: Product) => {
    setCurrentProduct(updatedProduct);
    setEditModalOpen(false);
  };
  return (
    <div>
      {isEditModalOpen && (
        <>
          <div
            className="main-product-card-modal-container-bg"
            onClick={() => handleCloseModal()}
          ></div>
          <SingleProdEditModal
            product={currentProduct}
            onClose={handleCloseModal}
            onSave={handleSaveProduct}
          />
        </>
      )}
      <button
        onClick={handleEditClick}
        className="flex items-center gap-1 font-bold text-[14px]"
      >
        <svg
          fill="#000000"
          height="20px"
          width="20px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 348.882 348.882"
          xmlSpace="preserve"
        >
          <g>
            <path
              d="M333.988,11.758l-0.42-0.383C325.538,4.04,315.129,0,304.258,0c-12.187,0-23.888,5.159-32.104,14.153L116.803,184.231
		c-1.416,1.55-2.49,3.379-3.154,5.37l-18.267,54.762c-2.112,6.331-1.052,13.333,2.835,18.729c3.918,5.438,10.23,8.685,16.886,8.685
		c0,0,0.001,0,0.001,0c2.879,0,5.693-0.592,8.362-1.76l52.89-23.138c1.923-0.841,3.648-2.076,5.063-3.626L336.771,73.176
		C352.937,55.479,351.69,27.929,333.988,11.758z M130.381,234.247l10.719-32.134l0.904-0.99l20.316,18.556l-0.904,0.99
		L130.381,234.247z M314.621,52.943L182.553,197.53l-20.316-18.556L294.305,34.386c2.583-2.828,6.118-4.386,9.954-4.386
		c3.365,0,6.588,1.252,9.082,3.53l0.419,0.383C319.244,38.922,319.63,47.459,314.621,52.943z"
            />
            <path
              d="M303.85,138.388c-8.284,0-15,6.716-15,15v127.347c0,21.034-17.113,38.147-38.147,38.147H68.904
		c-21.035,0-38.147-17.113-38.147-38.147V100.413c0-21.034,17.113-38.147,38.147-38.147h131.587c8.284,0,15-6.716,15-15
		s-6.716-15-15-15H68.904c-37.577,0-68.147,30.571-68.147,68.147v180.321c0,37.576,30.571,68.147,68.147,68.147h181.798
		c37.576,0,68.147-30.571,68.147-68.147V153.388C318.85,145.104,312.134,138.388,303.85,138.388z"
            />
          </g>
        </svg>
        რედაქტირება
      </button>
    </div>
  );
};

export default SingleProdEditButton;
