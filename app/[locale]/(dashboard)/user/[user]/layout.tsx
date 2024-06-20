import { Metadata } from "next";
import { getEverythingByNicknameAction } from "../../../../../actions";

export async function generateMetadata({
  params: { locale, user },
}: {
  params: { locale: string; user: string };
}): Promise<Metadata> {
  try {
    const everything = await getEverythingByNicknameAction(user);

    if (!everything || !everything.user) {
      throw new Error("User not found");
    }

    const title = "ეზოეზო";
    const titleEn = "EzoEzo";
    const desc = `ნახე ყველანაირი აქტივობა, რაც ${user}-ს აქვს.`;
    const descEn = `See all the activities that ${user} has.`;
    const pageTitle =
      locale === "ge"
        ? `${user.slice(0, 1).toUpperCase() + user.slice(1)} პროფილის გვერდი`
        : `${user.slice(0, 1).toUpperCase() + user.slice(1)} profile page`;
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
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "ასეთი გვერდი არ არსებობს | ეზოეზო",
      description: "გვერდზე, რომელზეც შეხვედით, არ არსებობს.",
      metadataBase: new URL("https://ezoezo.vercel.app/"),
      twitter: {
        card: "summary_large_image",
      },
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
