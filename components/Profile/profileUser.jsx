import { handleCookieDelete } from "@/app/(dashboard)/profile/actions"
import Image from "next/image"

const ProfileUser = ({ name, lastName }) => {
  return (
    <div className="profile-user">
      <Image src="https://picsum.photos/450/450" alt="profile" width={100} height={100}/>
      <p>{name} {lastName}</p>
      <button onClick={() => handleCookieDelete()}>Log Out</button> 
    </div>
  )
}

export default ProfileUser
