"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useCurrentLocale } from "../../locales/client";

const AdminNav = () => {
  const path = usePathname();
  const locale = useCurrentLocale();

  const handleUsersClick = (e: { preventDefault: () => void }) => {
    if (path === `/${locale}/admin`) {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div className="admin-navigation">
      <Link
        href="/admin"
        className={
          path === `/${locale}/admin` ? "active bg-[#2980b9] font-bold" : ""
        }
        onClick={handleUsersClick}
      >
        შეტყობინებები
      </Link>
      <Link
        href="/admin/products"
        className={
          path === `/${locale}/admin/products`
            ? "active bg-[#2980b9] font-bold"
            : ""
        }
      >
        პროდუქტები
      </Link>
      <Link
        href="/admin/blogs"
        className={
          path === `/${locale}/admin/blogs`
            ? "active bg-[#2980b9] font-bold"
            : ""
        }
      >
        ბლოგები
      </Link>
      <Link
        href="/admin/users"
        className={
          path === `/${locale}/admin/users`
            ? "active bg-[#2980b9] font-bold"
            : ""
        }
      >
        მომხმარებლები
      </Link>
      <Link
        href="/admin/orders"
        className={
          path === `/${locale}/admin/orders`
            ? "active bg-[#2980b9] font-bold"
            : ""
        }
      >
        შეკვეთები
      </Link>
    </div>
  );
};

export default AdminNav;
