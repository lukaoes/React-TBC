import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constants";
import Link from "next/link";
import Image from "next/image";

function parseJwt(token: string) {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export default function HeaderProfile() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  const value = cookie?.value;

  const cookieObject = JSON.parse(value ? value : "");
  const token = cookieObject.token;

  const decodedToken = parseJwt(token);
  const { firstName, image } = decodedToken;

  return (
    <div>
      {cookie ? (
        <Link href="/profile" className="menu-block">
          <span>{firstName}</span>
          <Image src={image} alt="user" width={40} height={40} />
        </Link>
      ) : (
        <div className="header-auth">
          <Link href="/login">Login </Link> /
          <Link href="/register"> Register</Link>
        </div>
      )}
    </div>
  );
}
