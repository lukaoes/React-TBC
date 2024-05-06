'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const AdminNav = () => {
  const path = usePathname()

  return (
    <div className="flex justify-center">
      <Link href="/admin" className={path === '/admin' ? 'active bg-[#2980b9] font-bold' : ''}>Users</Link>
      <Link href="/admin/add" className={path === '/admin/add' ? 'active bg-[#27ae60] font-bold' : ''}>Add</Link>
      <Link href="/admin/edit" className={path === '/admin/edit' ? 'active bg-[#ffc107] font-bold' : ''}>Edit</Link>
      <Link href="/admin/delete" className={path === '/admin/delete' ? 'active bg-[#ea6153] font-bold' : ''}>Delete</Link>
    </div>
  )
}

export default AdminNav
