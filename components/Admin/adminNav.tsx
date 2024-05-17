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
    <div className="flex justify-center">
      <Link
        href="/admin"
        className={path === "/admin" ? "active bg-[#2980b9] font-bold" : ""}
        onClick={handleUsersClick}
      >
        Users
      </Link>
      <Link
        href="/admin/add"
        className={path === "/admin/add" ? "active bg-[#27ae60] font-bold" : ""}
      >
        Add
      </Link>
    </div>
  );
};

export default AdminNav;
