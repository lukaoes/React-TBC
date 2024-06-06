import { getSession } from "@auth0/nextjs-auth0";
import ProfileUser from "../../../../components/Profile/profileUser";
import LoginToAccess from "../../../../components/noAccess/loginToAccess";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const session = await getSession();

    if (!session || !session.user || !session.user.sub) {
      return <LoginToAccess />;
    }

    return (
      <div className="profile-container">
        <ProfileUser />
        {children}
      </div>
    );
  } catch (error) {
    return <div>მოგვიანებით სცადეთ.</div>;
  }
}
