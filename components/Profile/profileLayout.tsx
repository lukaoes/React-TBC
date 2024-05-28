import ProfileUser from "./profileUser";

export default async function ProfileLayout() {
  return (
    <div className="profile-container">
      {/* @ts-ignore */}
      <ProfileUser />
      {/* @ts-ignore */}
      {/* <ProfileForm /> */}
    </div>
  );
}
