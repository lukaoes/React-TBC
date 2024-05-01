'use client'
import { useState } from "react";

interface UserData {
  name: string;
  last_name: string;
  email: string;
  password?: string;
}

type UserDataKey = keyof UserData;

interface ProfileFormProps {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ userData, setUserData }) => {
  const [edit, setEdit] = useState<{ [key: string]: boolean }>({
    name: false,
    last_name: false,
    email: false
  });
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [formData, setFormData] = useState<UserData>(userData);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, fieldName: UserDataKey) => {
    const { value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value
    }));
  };

  const handleEdit = (field: UserDataKey) => {
    setEdit({ ...edit, [field]: !edit[field] });
  };

  const handleSave = () => {
    const updatedUserData: UserData = { ...formData };
    
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
  };

  const generateAboutInput = (fieldName: UserDataKey, label: string, type: string = "text") => {
    return (
      <div>
        <label htmlFor={fieldName}>{label}:</label>
        <div className="profile-input-container">
          <input
            type={type}
            id={fieldName}
            name={fieldName}
            value={formData[fieldName]}
            onChange={(e) => handleChange(e, fieldName)}
            readOnly={!edit[fieldName]}
          />
          <button
            className="input-button"
            type="button"
            onClick={() => {
              if (edit[fieldName]) {
                handleSave();
              } else {
                handleEdit(fieldName);
              }
            }}
          >
            {edit[fieldName] ? "Save" : "Change"}
          </button>
        </div>
      </div>
    );
  };

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
  );
};

export default ProfileForm;
