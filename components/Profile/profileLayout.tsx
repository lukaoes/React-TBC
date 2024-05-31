import ProfileForm from "./profileForm";
import ProfileUser from "./profileUser";

export default async function ProfileLayout() {
  return (
    <div className="profile-container">
      <ProfileUser />
      <ProfileForm />
    </div>
  );
}
