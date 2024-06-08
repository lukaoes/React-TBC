"use client";
import React, { useState, useEffect } from "react";
import { deleteContact, getContact } from "../../actions";
import { Contact } from "../../types";

const AdminInbox = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsData = await getContact();
      setContacts(contactsData);
    };
    fetchContacts();
  }, []);

  const openModal = (message: string) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage("");
  };

  const handleDelete = async (id: number) => {
    await deleteContact(id);
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className="admin-inbox">
      <h1>შემოსული შეტყობინებები</h1>
      <div className="admin-table">
        <div className="row admin-table-header blue">
          <div className="cell">ნომერი</div>
          <div className="cell">თარიღი</div>
          <div className="cell">სახელი</div>
          <div className="cell">მეილი</div>
          <div className="cell">ნომერი</div>
          <div className="cell">მესიჯი</div>
          <div className="cell">წაშლა</div>
        </div>
        {contacts.map((item, index) => (
          <div className="row" key={`all-contacts-${index}`}>
            <div className="cell" data-title="ნომერი">
              {index + 1}
            </div>
            <div className="cell" data-title="თარიღი">
              {item.created_at.slice(0, 10)}
            </div>
            <div className="cell" data-title="სახელი">
              {item.name}
            </div>
            <div className="cell" data-title="მეილი">
              {item.email}
            </div>
            <div className="cell" data-title="ნომერი">
              {item.number}
            </div>
            <div className="cell" data-title="მესიჯი">
              <button onClick={() => openModal(item.message)}>
                ნახეთ მესიჯი
              </button>
            </div>
            <div className="cell" data-title="წაშლა">
              <button onClick={() => handleDelete(item.id)}>DEL</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <>
          <div
            className="main-product-card-modal-container-bg"
            onClick={closeModal}
          ></div>
          <div className="admin-message-modal">
            <div className="admin-message-modal-content">
              <p>{selectedMessage}</p>
              <button onClick={closeModal}>დახურვა</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminInbox;
