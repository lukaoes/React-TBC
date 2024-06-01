import Link from "next/link";

const ProfileNavigation = () => {
  return (
    <div className="profile-user">
      <h2 className="profile-navigation-head">ნავიგაცია</h2>
      <div>
        <Link href="/profile" className="profile-navigation">
          ჩემი ინფორმაცია
        </Link>
        <Link href="/profile/address" className="profile-navigation">
          ჩემი მისამართები
        </Link>
        <Link href="/profile/orders" className="profile-navigation">
          ჩემი შეკვეთები
        </Link>
        <Link href="" className="profile-navigation">
          ჩემი პაკეტები
        </Link>
      </div>
    </div>
  );
};

export default ProfileNavigation;
