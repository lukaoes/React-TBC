'use client'
import { useState } from 'react';
import { BASE_URL } from '../../../../api';

const Add = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/api/create-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          age: parseInt(age),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      setName('');
      setEmail('');
      setAge('');

    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form className="admin-add-form" onSubmit={handleSubmit}>
      <div className="admin-add-subtitle text-center text-lg">Add new user!</div>
      <div className="admin-add-input-container ic1">
        <input
          id="fullname"
          className="admin-add-input"
          type="text"
          placeholder=" "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="admin-add-cut"></div>
        <label htmlFor="fullname" className="admin-add-placeholder">
          Full Name
        </label>
      </div>
      <div className="admin-add-input-container ic2">
        <input
          id="email"
          className="admin-add-input"
          type="email"
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="admin-add-cut admin-add-cut-short"></div>
        <label htmlFor="email" className="admin-add-placeholder">
          Email
        </label>
      </div>
      <div className="admin-add-input-container ic2">
        <input
          id="age"
          className="admin-add-input"
          type="number"
          placeholder=" "
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <div className="admin-add-cut"></div>
        <label htmlFor="age" className="admin-add-placeholder">
          Age
        </label>
      </div>
      <button type="submit" className="admin-add-submit bg-[#27ae60]">
        ADD USER
      </button>
    </form>
  );
};

export default Add;
