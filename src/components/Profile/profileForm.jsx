const ProfileForm = () => {
  return (
    <form className="profile-form">
      <fieldset>
        <legend>About</legend>

        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value="Luka" readOnly />

        <label htmlFor="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" value="Pitskhelauri" readOnly />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value="luka.pitsk@gmail.com" readOnly />
      </fieldset>

      <fieldset>
        <legend>Password</legend>

        <label htmlFor="new_password">New Password:</label>
        <input type="password" id="new_password" name="new_password" placeholder="New Password..."/>

        <label htmlFor="confirm_new_password">Confirm New Password:</label>
        <input type="password" id="confirm_new_password" name="confirm_new_password" placeholder="Confirm New Password..." />

        <button>Save Changes</button>
      </fieldset>
    </form>
  )
}

export default ProfileForm