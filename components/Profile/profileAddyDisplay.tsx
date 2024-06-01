import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { getAddyAction, deleteAddyAction } from "../../actions";

const ProfileAddyDisplay = () => {
  const [addyData, setAddyData] = useState<any>();
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
            <button>Edit</button>
            <button onClick={handleDeleteAddress}>Remove</button>{" "}
            {/* Button for deleting address */}
          </div>
        </div>
      ) : (
        <p>No address found.</p>
      )}
    </div>
  );
};

export default ProfileAddyDisplay;
