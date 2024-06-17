import { Metadata } from "next";
import { getNicknameAction } from "../../../../../actions";
import { getSession } from "@auth0/nextjs-auth0";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const session = await getSession();
  const nickname = await getNicknameAction(session?.user?.sub);
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc = `${nickname[0].nickname} მისამართების გვერდი`;
  const descEn = `${nickname[0].nickname} addresses page`;
  const pageTitle =
    locale === "ge"
      ? `მისამართები | ${nickname[0].nickname}`
      : `Addresses | ${nickname[0].nickname}`;
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
