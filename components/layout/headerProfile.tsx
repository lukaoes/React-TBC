// import { cookies } from "next/headers";
// import { AUTH_COOKIE_KEY } from "../../constants";
import Link from "next/link";
import Image from "next/image";

export default function HeaderProfile() {
  // const cookieStore = cookies();
  // const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  // const value = cookie?.value.split(",");
  // const newValue = value ? value[1] : null;
  // const match = newValue ? newValue.match(/"name"\s*:\s*"([^"]+)"/) : null;
  // const name = match ? match[1] : null;

  return (
    <div>
      {/* <Link href="/profile" className="menu-block">
        <span>{name}</span>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
          alt="user"
          width={40}
          height={40}
        />
      </Link> */}
      ) : (
        <div className="header-auth">
          <Link href="/auth/login">Login / Register</Link>
          <Link href="/auth/register"> Register</Link>
        </div>
      )}
    </div>
  );
}
