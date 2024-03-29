const ProfileUser = ({ name, lastName }) => {
  return (
    <div className="profile-user">
      <img src="https://picsum.photos/450/450" alt="profile"/>
      <p>{name} {lastName}</p>
      <button>Log Out</button>
    </div>
  )
}

export default ProfileUser
