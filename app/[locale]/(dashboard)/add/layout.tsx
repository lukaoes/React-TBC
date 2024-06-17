import { getSession } from "@auth0/nextjs-auth0";
import LoginToAccess from "../../../../components/noAccess/loginToAccess";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "დაამატე ბუნებასთან კავშირში მყოფი პროდუქტი გასაყიდად ან გასაქირავებლად. იქირავე და გააქირავე საპიკნიკე ადგილი...";
  const descEn =
    "Add products that are in connection with nature for sale or for rent. Rent or rent out camping sites...";
  const pageTitle = locale === "ge" ? "დამატება" : "Add";
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: ["ბლოგი", "ლაშქრობაზე", "ცოცვა", "ბუნება", "ქემფინგი"],
    metadataBase: new URL("https://ezoezo.vercel.app/"),
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    return <LoginToAccess />;
  }
  return <main>{children}</main>;
}
