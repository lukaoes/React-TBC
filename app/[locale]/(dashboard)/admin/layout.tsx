import { getSession } from "@auth0/nextjs-auth0";
import AdminToAccess from "../../../../components/noAccess/adminToAccess";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (session?.user.role[0] !== "admin") {
    return <AdminToAccess />;
  }
  return <main>{children}</main>;
}
