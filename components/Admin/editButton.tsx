'use client'
import React, { useState } from "react";
import EditModal from "./editModal";
import { editUser } from "../../actions";

interface EditButtonProps {
  id: number;
}

const EditButton: React.FC<EditButtonProps> = ({ id }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<{ name: string; email: string; age: string }>({ name: "", email: "", age: "" });

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFormDataChange = (newFormData: { name: string; email: string; age: string }) => {
    setFormData(newFormData);
  };

  const handleEdit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("age", formData.age);
      
      await editUser(id, formDataToSend);
      setShowModal(false);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <>
      <div className="cell" data-title="edit">
        <button onClick={handleToggleModal}>✏️</button>
      </div>
      {showModal && <EditModal id={id} formData={formData} onChange={handleFormDataChange} onEdit={handleEdit} onClose={handleToggleModal} />}
    </>
  );
};

export default EditButton;
