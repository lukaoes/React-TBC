import { Link } from "next-view-transitions";
import { useCurrentLocale, useScopedI18n } from "../../locales/client";
import { usePathname } from "next/navigation";

const ProfileNavigation = () => {
  const t = useScopedI18n("profile");
  const path = usePathname();
  const locale = useCurrentLocale();
  return (
    <div className="profile-user">
      <h2 className="profile-navigation-head">{t("navigation")}</h2>
      <div>
        <Link
          href="/profile"
          className={
            path == `/${locale}/profile`
              ? "profile-navigation bg-gray-300"
              : "profile-navigation"
          }
        >
          {t("myInfo")}
        </Link>
        <Link
          href="/profile/address"
          className={
            path == `/${locale}/profile/address`
              ? "profile-navigation bg-gray-300"
              : "profile-navigation"
          }
        >
          {t("myAddy")}
        </Link>
        <Link
          href="/profile/orders"
          className={
            path == `/${locale}/profile/orders`
              ? "profile-navigation bg-gray-300"
              : "profile-navigation"
          }
        >
          {t("myOrders")}
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavigation;
