"use client";
// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function HeaderProfile() {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // const value = cookie?.value.split(",");
  // const newValue = value ? value[1] : null;
  // const match = newValue ? newValue.match(/"name"\s*:\s*"([^"]+)"/) : null;
  // const name = match ? match[1] : null;
  const { user } = useUser();
  // console.log(user);
  const name = user?.name ? user.name.split(" ") : [];
  const firstName = name.length > 0 ? name[0] : "";
  return (
    <div>
      {user ? (
        <Link href="/profile" className="menu-block">
          <span>{firstName}</span>
          {user.picture && (
            <Image
              src={user.picture}
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
