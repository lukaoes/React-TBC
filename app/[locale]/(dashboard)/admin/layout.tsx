import { getSession } from "@auth0/nextjs-auth0";
import AdminToAccess from "../../../../components/noAccess/adminToAccess";
import AdminNav from "../../../../components/Admin/adminNav";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.user.role[0] !== "admin") {
    return <AdminToAccess />;
  }
  return (
    <main>
      <AdminNav />
      {children}
    </main>
  );
}
