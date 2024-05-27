import ProfileUser from "./profileUser";
import ProfileForm from "./profileForm";
import { getSession } from "@auth0/nextjs-auth0";

export default async function ProfileLayout({
  picture,
}: {
  picture: object[];
}) {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="profile-container">
      {user && <ProfileUser user={user} picture={picture} />}
      {/* @ts-ignore */}
      <ProfileForm userData={user} />
    </div>
  );
}
