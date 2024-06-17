import Link from "next/link";
import { useScopedI18n } from "../../locales/client";

const ProfileNavigation = () => {
  const t = useScopedI18n("profile");
  return (
    <div className="profile-user">
      <h2 className="profile-navigation-head">{t("navigation")}</h2>
      <div>
        <Link href="/profile" className="profile-navigation">
          {t("myInfo")}
        </Link>
        <Link href="/profile/address" className="profile-navigation">
          {t("myAddy")}
        </Link>
        <Link href="/profile/orders" className="profile-navigation">
          {t("myOrders")}
        </Link>
        <Link href="" className="profile-navigation">
          {t("myPlans")}
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavigation;
