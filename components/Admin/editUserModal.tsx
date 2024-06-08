"use client";

import React, { useState } from "react";
import { updateUserInfo } from "../../actions";

interface EditModalProps {
  user: any;
  onClose: () => void;
  onSave: (updatedUser: any) => void;
}

const EditUserModal = ({ user, onClose, onSave }: EditModalProps) => {
  const [editedUser, setEditedUser] = useState(user);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = async () => {
    const { nickname, picture } = editedUser;

    if (!nickname || !picture) {
      setError("გთხოვთ შეავსეთ ყველა ველი.");
      return;
    }

    try {
      const updatedUser = await updateUserInfo(editedUser);
      onSave(updatedUser);
    } catch (error) {
      setError("მოგვიანებით სცადეთ.");
      console.error("Failed to update user:", error);
    }
  };

  return (
    <div className="edit-user-modal">
      <div className="edit-user-content">
        <h2>ინფორმაციის რედაქტირება</h2>
        <form>
          <label>
            ნიქნეიმი
            <input
              type="text"
              name="nickname"
              value={editedUser.nickname}
              onChange={handleChange}
            />
          </label>
          <label>
            სურათის URL
            <input
              type="text"
              name="picture"
              value={editedUser.picture}
              onChange={handleChange}
            />
          </label>
          <div className="edit-user-modal-buttons">
            <button type="button" onClick={handleSave}>
              შენახვა
            </button>
            <button type="button" onClick={onClose}>
              გათიშვა
            </button>
          </div>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default EditUserModal;
