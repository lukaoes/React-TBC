import { getSession } from "@auth0/nextjs-auth0";
import ProfileUser from "../../../../components/Profile/profileUser";
import LoginToAccess from "../../../../components/noAccess/loginToAccess";
import { Metadata } from "next";
import { getNicknameAction } from "../../../../actions";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const session = await getSession();
  const nickname = await getNicknameAction(session?.user?.sub);
  // const picture = await getPictureAction(session?.user?.sub);
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc = `${nickname[0].nickname} პროფილის გვერდი`;
  const descEn = `${nickname[0].nickname} profile page`;
  const pageTitle =
    locale === "ge"
      ? `${nickname[0].nickname} | პროფილი`
      : `${nickname[0].nickname} | Profile`;
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: ["ბლოგი", "ლაშქრობაზე", "ცოცვა", "ბუნება", "ქემფინგი"],
    metadataBase: new URL("https://ezoezo.vercel.app/"),
    // openGraph: {
    //   images: [picture[0].picture],
    // },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    const session = await getSession();

    if (!session || !session.user || !session.user.sub) {
      return <LoginToAccess />;
    }

    return (
      <div className="profile-container">
        <ProfileUser />
        {children}
      </div>
    );
  } catch (error) {
    return <div>მოგვიანებით სცადეთ.</div>;
  }
}
