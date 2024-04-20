// 'use client'
import ProfileForm from "@/components/Profile/profileForm";
import ProfileUser from "@/components/Profile/profileUser";
// import { useState } from "react";


export default async function Profile({params}) {
  const {lang} = params
  const userData = {
        name: "Luka",
        last_name: "Pitskhelauri",
        email: "luka.pitsk@gmail.com",
        password: "gitaragitara" 
  }
  // const [userData, setUserData] = useState({
  //   name: "Luka",
  //   last_name: "Pitskhelauri",
  //   email: "luka.pitsk@gmail.com",
  //   password: "gitaragitara" 
  // });
  return (
    <div className="profile-container">
      <ProfileUser name={userData.name} lastName={userData.last_name} lang={lang} />
      <ProfileForm userData={userData} lang={lang}
      // setUserData={setUserData}
       />
    </div>
  )
}
