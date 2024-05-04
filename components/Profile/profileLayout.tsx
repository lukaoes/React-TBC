'use client'
import { useState } from "react";
import ProfileUser from "./profileUser";
import ProfileForm from "./profileForm";

export default function ProfileLayout() {
  const [userData, setUserData] = useState({
    name: "Luka",
    last_name: "Pitskhelauri",
    email: "luka.pitsk@gmail.com",
    password: "gitaragitara" 
  });
  return (
    <div className="profile-container">
      <ProfileUser name={userData.name} lastName={userData.last_name} />
       {/* @ts-ignore */}
      <ProfileForm userData={userData} setUserData={setUserData} />
    </div>
  )
}