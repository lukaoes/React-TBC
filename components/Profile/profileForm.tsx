"use client";
import { useScopedI18n } from "../../locales/client";
import { useEffect, useState } from "react";

interface UserData {
  given_name: string | undefined;
  family_name: string;
  email: string;
}

type UserDataKey = keyof UserData;

interface ProfileFormProps {
  userData: UserData | undefined;
  setUserData: (userData: UserData) => void;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ userData, setUserData }) => {
  const t = useScopedI18n("profile");

  const [edit, setEdit] = useState<{ [key: string]: boolean }>({
    given_name: false,
    family_name: false,
    email: false,
  });
  const [formData, setFormData] = useState<UserData | undefined>(userData);
  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  if (!formData) {
    return <div>Loading...</div>;
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: UserDataKey
  ) => {
    const { value } = event.target;
    setFormData((prevFormData) => {
      if (!prevFormData) {
        return prevFormData;
      }

      return {
        ...prevFormData,
        [fieldName]: value as UserData[UserDataKey],
      };
    });
  };
  const handleEdit = (field: UserDataKey) => {
    setEdit({ ...edit, [field]: !edit[field] });
  };

  const handleSave = () => {
    const updatedUserData: UserData = { ...formData };

    setUserData(updatedUserData);

    setEdit({
      given_name: false,
      family_name: false,
      email: false,
    });
  };

  const generateAboutInput = (
    fieldName: UserDataKey,
    label: string,
    type: string = "text"
  ) => {
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
            {edit[fieldName] ? t("save") : t("change")}
          </button>
        </div>
      </div>
    );
  };

  return (
    <form className="profile-form">
      <fieldset>
        <legend>{t("about")}</legend>

        {generateAboutInput("given_name", "Name")}
        {generateAboutInput("family_name", "Last Name")}
        {generateAboutInput("email", "Email", "email")}
      </fieldset>

      <button type="button" onClick={handleSave}>
        {t("saveChanges")}
      </button>
    </form>
  );
};

export default ProfileForm;
