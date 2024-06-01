"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import {
  getAddyAction,
  deleteAddyAction,
  updateAddyAction,
} from "../../actions";
import EditAddressModal from "./addressEditModal";

interface AddressData {
  first_name: string;
  last_name: string;
  country: string;
  city: string;
  street_address: string;
  postal_code: string;
  phone: string;
  email: string;
}

const ProfileAddyDisplay: React.FC = () => {
  const [addyData, setAddyData] = useState<AddressData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.sub) {
        try {
          const data = await getAddyAction(user.sub);
          setAddyData(data[0]);
        } catch (error) {
          console.error("Error fetching address data:", error);
        }
      }
    };

    fetchData();
  }, [user, user?.sub]);

  const handleDeleteAddress = async () => {
    try {
      if (user && user.sub) {
        await deleteAddyAction(user.sub);
        setAddyData(null); // Clear the address data after deletion
      }
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  const handleSaveAddress = async (updatedData: AddressData) => {
    try {
      if (user && user.sub) {
        await updateAddyAction(user.sub, updatedData);
        const updatedDataFromServer = await getAddyAction(user.sub); // Fetch the updated address data
        setAddyData(updatedDataFromServer[0]);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <div>
      {addyData ? (
        <div className="addy-container">
          <h2>
            {addyData.first_name} {addyData.last_name}
          </h2>
          <p>
            {addyData.country}, {addyData.city} <br /> {addyData.street_address}
            , {addyData.postal_code} <br />
            {addyData.phone} <br />
            {addyData.email}
          </p>
          <div className="addy-buttons-container">
            <button onClick={() => setIsModalOpen(true)}>Edit</button>
            <button onClick={handleDeleteAddress}>Remove</button>
          </div>
        </div>
      ) : (
        <p>No address found.</p>
      )}

      <EditAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={addyData}
        onSave={handleSaveAddress}
      />
    </div>
  );
};

export default ProfileAddyDisplay;
