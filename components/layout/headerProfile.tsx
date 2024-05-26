"use client";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { getPictureAction } from "../../actions";

export default function HeaderProfile() {
  const [profilePicture, setProfilePicture] = useState<Array<{
    picture: string;
  }> | null>(null);
  const [pic, setPic] = useState<string | null>(null);

  useEffect(() => {
    if (profilePicture && profilePicture.length > 0) {
      setPic(profilePicture[0].picture);
    }
  }, [profilePicture]);

  const { user } = useUser();
  const name = user?.name ? user.name.split(" ") : [];
  const firstName = name.length > 0 ? name[0] : "";
  useEffect(() => {
    console.log("User changed:", user);
    if (user && user.sid) {
      console.log("Saving user profile...");
      saveUserProfile(user);
    }
  }, [user]);

  const saveUserProfile = async (user: any) => {
    if (user) {
      try {
        const pictureUrl = await getPictureAction(user.sid);

        setProfilePicture(pictureUrl);
        const response = await fetch("/api/users/save-user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sid: user.sid,
            email: user.email,
            picture: user.picture,
          }),
        });
        const data = await response.json();
        // console.log(data.message);
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    }
  };
  return (
    <div>
      {user ? (
        <Link href="/profile" className="menu-block">
          <span>{firstName}</span>
          {pic && (
            <Image
              src={pic}
              alt={user.name || "Profile Picture"}
              width={40}
              height={40}
            />
          )}
        </Link>
      ) : (
        <div className="header-auth">
          <Link href="/api/auth/login">Login </Link> /
          <Link href="/api/auth/login">Register</Link>
        </div>
      )}
    </div>
  );
}
