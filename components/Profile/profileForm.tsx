"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useScopedI18n } from "../../locales/client";
import { useEffect, useState } from "react";
import { changeNicknameAction, getNicknameAction } from "../../actions";
import profileIllustration from "../../public/assets/images/profileIllustration.webp";
import Image from "next/image";

interface ProfileFormProps {}

interface ProfileFormState {
  newNickname: string;
  originalNickname: string;
}

const ProfileForm: React.FC<ProfileFormProps> = () => {
  const [state, setState] = useState<ProfileFormState>({
    newNickname: "",
    originalNickname: "",
  });

  const t = useScopedI18n("profile");
  const { user } = useUser();

  useEffect(() => {
    const fetchNickname = async () => {
      if (user?.sub) {
        const response = await getNicknameAction(user.sub);
        const nickname = response[0].nickname;
        setState((prevState) => ({
          ...prevState,
          originalNickname: nickname,
          newNickname: nickname,
        }));
      }
    };
    fetchNickname();
  }, [user?.sub]);

  const handleSave = async () => {
    if (user?.sub && state.newNickname) {
      await changeNicknameAction(
        user.sub,
        state.newNickname.toLocaleLowerCase()
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\s+/g, "");
    value = value.substring(0, 15);
    setState((prevState) => ({
      ...prevState,
      newNickname: value,
    }));
  };

  const handleInputBlur = () => {
    if (state.newNickname.trim() === "") {
      setState((prevState) => ({
        ...prevState,
        newNickname: state.originalNickname,
      }));
    }
  };

  return (
    <form className="profile-form">
      <Image
        src={profileIllustration}
        width={550}
        height={400}
        alt="profile-illustration"
      />
      <fieldset>
        <legend>{t("about")}</legend>
        <div>
          <div>
            <h2 className="profile-title">Email:</h2>
            <span>{user?.email || ""}</span>
            {user?.email !== user?.name && user?.name ? (
              <>
                <h2 className="profile-title">Name:</h2>
                <span>{user.name}</span>
              </>
            ) : null}
            <h2 className="profile-title">Nickname:</h2>
            <span>
              {state.newNickname.trim() === ""
                ? state.originalNickname
                : state.newNickname}
            </span>
          </div>

          <label className="profile-title" htmlFor="nickname">
            Change Your Nickname:
          </label>
          <div className="profile-input-container">
            <input
              type="text"
              id="nickname"
              name="nickname"
              maxLength={15}
              value={state.newNickname}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              onKeyDown={(e) => {
                if (e.key === " ") {
                  e.preventDefault();
                }
              }}
            />
            <button className="input-button" type="button" onClick={handleSave}>
              {t("save")}
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ProfileForm;
