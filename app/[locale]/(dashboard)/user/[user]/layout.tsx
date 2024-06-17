import { Metadata } from "next";
import { getEverythingByNicknameAction } from "../../../../../actions";

export async function generateMetadata({
  params: { locale, user },
}: {
  params: { locale: string; user: string };
}): Promise<Metadata> {
  const everything = await getEverythingByNicknameAction(user);
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc = `ნახე ყველანაირი აქტივობა, რაც ${user}-ს აქვს.`;
  const descEn = `See all the activities that ${user} has.`;
  const pageTitle =
    locale === "ge"
      ? `${
          user.slice(0, 1).toUpperCase() + user.slice(1, 9999)
        } პროფილის გვერდი`
      : `${user.slice(0, 1).toUpperCase() + user.slice(1, 9999)} profile page`;
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: ["ბლოგი", "ლაშქრობაზე", "ცოცვა", "ბუნება", "ქემფინგი"],
    metadataBase: new URL("https://ezoezo.vercel.app/"),
    openGraph: {
      images: [everything.user.picture],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
