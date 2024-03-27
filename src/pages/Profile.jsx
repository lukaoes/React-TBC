import ProfileForm from "../components/Profile/profileForm"
import ProfileUser from "../components/Profile/profileUser"

const Profile = () => {
  return (
    <div className="profile-container">
      <ProfileUser />
      <ProfileForm />
    </div>
  )
}

export default Profile
