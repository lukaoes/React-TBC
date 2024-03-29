import { useState } from "react";
import ProfileForm from "../components/Profile/profileForm"
import ProfileUser from "../components/Profile/profileUser"

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Luka",
    last_name: "Pitskhelauri",
    email: "luka.pitsk@gmail.com",
    password: "gitaragitara" 
  });
  console.log(userData)
  return (
    <div className="profile-container">
      <ProfileUser name={userData.name} lastName={userData.last_name} />
      <ProfileForm userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default Profile
