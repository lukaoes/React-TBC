'use client'
import ProfileForm from "@/components/Profile/profileForm";
import ProfileUser from "@/components/Profile/profileUser";
import { useState } from "react";


export default function Profile() {
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
