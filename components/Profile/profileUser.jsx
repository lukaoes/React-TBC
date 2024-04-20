// import { handleCookieDelete } from "@/app/[lang]/(dashboard)/profile/actions"
import { getDictionary } from "@/app/[lang]/dictionaries"
import Image from "next/image"

async function ProfileUser({ name, lastName, lang }) {
  const dict = await getDictionary(lang) // en
  return (
    <div className="profile-user">
      <Image src="https://picsum.photos/450/450" alt="profile" width={100} height={100}/>
      <p>{name} {lastName}</p>
      <button 
      // onClick={() => handleCookieDelete()}
      >{dict.profile.logOut}</button> 
    </div>
  )
}

export default ProfileUser
