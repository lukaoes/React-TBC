"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const path = usePathname();

  const handleUsersClick = (e: { preventDefault: () => void }) => {
    if (path === "/admin") {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div className="admin-navigation">
      <Link
        href="/admin"
        className={path === "/admin" ? "active bg-[#2980b9] font-bold" : ""}
        onClick={handleUsersClick}
      >
        შეტყობინებები
      </Link>
      <Link
        href="/admin/products"
        className={
          path === "/admin/products" ? "active bg-[#27ae60] font-bold" : ""
        }
      >
        პროდუქტები
      </Link>
      <Link
        href="/admin/blogs"
        className={
          path === "/admin/products" ? "active bg-[#27ae60] font-bold" : ""
        }
      >
        ბლოგები
      </Link>
      <Link
        href="/admin/users"
        className={
          path === "/admin/products" ? "active bg-[#27ae60] font-bold" : ""
        }
      >
        მომხმარებლები
      </Link>
    </div>
  );
};

export default AdminNav;
