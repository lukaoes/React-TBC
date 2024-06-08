"use client";
import React, { useState, useEffect } from "react";
import { getUsers } from "../../actions";
import EditUserModal from "./editUserModal";

const AdminUsersTable = () => {
  const [displayUsers, setDisplayUsers] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setDisplayUsers(users);
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSave = (updatedUser: any) => {
    setDisplayUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    handleCloseModal();
  };

  return (
    <div className="admin-table">
      <div className="row admin-table-header blue">
        <div className="cell">ID</div>
        <div className="cell">Email</div>
        <div className="cell">Nickname</div>
        <div className="cell">SUB</div>
        <div className="cell">edit</div>
      </div>
      {displayUsers.map((user, index) => (
        <div className="row" key={`user-admin-${index}`}>
          <div className="cell" data-title="ID">
            {user.id}
          </div>
          <div className="cell" data-title="Email">
            {user.email}
          </div>
          <div className="cell" data-title="Nickname">
            {user.nickname}
          </div>
          <div className="cell" data-title="SUB">
            {user.sub}
          </div>
          <div className="cell" data-title="edit">
            <button onClick={() => handleEditClick(user)}>edit</button>
          </div>
        </div>
      ))}
      {isModalOpen && selectedUser && (
        <EditUserModal
          user={selectedUser}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default AdminUsersTable;
