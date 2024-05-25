"use client";
import { useEffect, useState } from "react";
import ProfileUser from "./profileUser";
import ProfileForm from "./profileForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import Loading from "../../app/[locale]/(dashboard)/loading";

export default function ProfileLayout({ picture }: { picture: object[] }) {
  console.log(picture);
  const { user, isLoading } = useUser();
  const [userData, setUserData] = useState({ user });

  useEffect(() => {
    setUserData({ user });
  }, [user]);

  if (isLoading || !userData.user) {
    return <Loading />;
  }

  return (
    <div className="profile-container">
      <ProfileUser userData={userData.user} picture={picture} />
      {/* @ts-ignore */}
      <ProfileForm userData={userData.user} setUserData={setUserData} />
    </div>
  );
}
