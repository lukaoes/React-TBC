"use client";
import { useState, useEffect } from "react";
import { AddressData } from "../../types";

interface EditAddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: AddressData | null;
  onSave: (updatedData: AddressData) => Promise<void>;
}

const EditAddressModal: React.FC<EditAddressModalProps> = ({
  isOpen,
  onClose,
  initialData,
  onSave,
}) => {
  const [editData, setEditData] = useState<AddressData | null>(initialData);

  useEffect(() => {
    setEditData(initialData);
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editData) {
      setEditData({ ...editData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editData) {
      await onSave(editData);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Address</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="first_name"
              value={editData?.first_name || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="last_name"
              value={editData?.last_name || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={editData?.country || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={editData?.city || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Street Address:
            <input
              type="text"
              name="street_address"
              value={editData?.street_address || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              name="postal_code"
              value={editData?.postal_code || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={editData?.phone || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={editData?.email || ""}
              onChange={handleChange}
            />
          </label>
          <div className="flex">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAddressModal;
