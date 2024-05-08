import React from "react";

interface EditModalProps {
  id: number;
  formData: { name: string; email: string; age: string };
  onChange: (newFormData: { name: string; email: string; age: string }) => void;
  onEdit: () => void;
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ formData, onChange, onEdit, onClose }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <h2>Edit User</h2>
        <label>
          Name:
          <input type="text" value={formData.name} onChange={(e) => onChange({ ...formData, name: e.target.value })} />
        </label>
        <label>
          Email:
          <input type="email" value={formData.email} onChange={(e) => onChange({ ...formData, email: e.target.value })} />
        </label>
        <label>
          Age:
          <input type="number" value={formData.age} onChange={(e) => onChange({ ...formData, age: e.target.value })} />
        </label>
        <button onClick={onEdit}>Save</button>
      </div>
    </div>
  );
};

export default EditModal;