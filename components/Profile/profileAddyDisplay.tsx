"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { getAddyAction } from "../../actions";

const ProfileAddyDisplay = () => {
  const [addyData, setAddyData] = useState<any>();
  const { user } = useUser();
  console.log(user);

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

  console.log("dataaaaaaaa", addyData);

  return (
    <div>
      {addyData ? (
        <div>
          <h2>
            {addyData.first_name} {addyData.last_name}
          </h2>
          <p>
            {addyData.country}, {addyData.city} <br /> {addyData.street_address}
            , {addyData.postal_code} <br />
            {addyData.phone} <br />
            {addyData.email}
          </p>
          <div>
            <button>Edit</button>
            <button>Remove</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfileAddyDisplay;
