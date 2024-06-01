import ProfileUser from "../../../../components/Profile/profileUser";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="profile-container">
      <ProfileUser />
      {children}
    </div>
  );
}
