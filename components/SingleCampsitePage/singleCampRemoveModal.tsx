"use client";

import { useRouter } from "next/navigation";
import { Campsite } from "../../types";
import { deleteSingleCampsite } from "../../actions";

interface EditModalProps {
  camp: Campsite;
  onClose: () => void;
}

const SingleCampRemoveModal = ({ camp, onClose }: EditModalProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await deleteSingleCampsite(camp.id);
      router.push("/campsites");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  return (
    <div className="single-product-edit-modal">
      <div className="single-product-edit-content">
        <h2>ნამდვილად გსურთ პიკნიკის ადგილის წაშლა?</h2>
        <p>
          ამ ქმედებას უკან ვერ დააბრუნებთ და განცხადების აღდგენაც ვერ მოხდება.
        </p>
        <div className="single-prod-remove-modal">
          <button onClick={onClose}>გათიშვა</button>
          <button onClick={handleDelete}>წაშლა</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCampRemoveModal;
