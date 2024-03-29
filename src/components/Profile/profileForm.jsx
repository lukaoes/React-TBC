import { useState } from "react"

const ProfileForm = ({ userData, setUserData }) => {
  const [edit, setEdit] = useState({
    name: false,
    last_name: false,
    email: false
  })
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordsMatch, setPasswordsMatch] = useState(true)

  const [formData, setFormData] = useState(userData)

  const handlePasswordChange = (event) => {
    const { value } = event.target
    setPassword(value)
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target
    setConfirmPassword(value)
    setPasswordsMatch(value === password)
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleEdit = (field) => {
    setEdit({ ...edit, [field]: !edit[field] })
  }

  const handleSave = () => {
    const updatedUserData = { ...formData };
    
    if (password !== "" && password === confirmPassword) {
      updatedUserData.password = password;
    }
    
    setUserData(updatedUserData);
    setPassword("");
    setConfirmPassword("");
    setEdit({
      name: false,
      last_name: false,
      email: false
    });

    console.log('updfdt', updatedUserData)
  };

  const generateAboutInput = (fieldName, label, type = "text") => {
    return (
      <div>
        <label htmlFor={fieldName}>{label}:</label>
        <div className="profile-input-container">
          <input
            type={type}
            id={fieldName}
            name={fieldName}
            value={formData[fieldName]}
            onChange={handleChange}
            readOnly={!edit[fieldName]}
          />
          <button
            className="input-button"
            type="button"
            onClick={() => {
              if (edit[fieldName]) {
                handleSave()
              } else {
                handleEdit(fieldName)
              }
            }}
          >
            {edit[fieldName] ? "Save" : "Change"}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="profile-form">
      <fieldset>
        <legend>About</legend>

        {generateAboutInput("name", "Name")}
        {generateAboutInput("last_name", "Last Name")}
        {generateAboutInput("email", "Email", "email")}
      </fieldset>

      <fieldset>
      <legend>Password</legend>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!passwordsMatch && <p style={{ color: "red" }}>Passwords do not match.</p>}
        </div>
      </fieldset>

      <button type="button" onClick={handleSave}>Save Changes</button>
    </form>
  )
}

export default ProfileForm