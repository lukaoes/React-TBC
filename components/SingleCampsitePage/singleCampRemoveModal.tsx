"use client";

import { useRouter } from "next/navigation";
import { Campsite } from "../../types";
import { deleteSingleCampsite } from "../../actions";
import { useI18n } from "../../locales/client";

interface EditModalProps {
  camp: Campsite;
  onClose: () => void;
}

const SingleCampRemoveModal = ({ camp, onClose }: EditModalProps) => {
  const router = useRouter();
  const t = useI18n();

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
        <h2>{t("singleCamp.sure")}</h2>
        <p>{t("singleCamp.noback")}</p>
        <div className="single-prod-remove-modal">
          <button onClick={onClose}>{t("singleCamp.close")}</button>
          <button onClick={handleDelete}>{t("singleCamp.delete")}</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCampRemoveModal;
