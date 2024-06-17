import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "საპიკნიკე ადგილები საქართველოს მასშტაბით. იქირავე და გააქირავე ეზო და საპიკნიკე ადგილი, დაბანაკდი ბუნებასთან ახლოს, ან მიიღე დამატებითი შემოსავალი.";
  const descEn =
    "Campsites in Georgia. Rent and rent out your yard and camping space, camp near the nature or get additional income.";
  const pageTitle = locale === "ge" ? "საპიკნიკე ადგილები" : "Campsites";
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: [
      "პიკნიკი",
      "საპიკნიკე ადგილები საქართველოში",
      "ლაშქრობა",
      "ბანაკი",
      "ქემფინგი",
    ],
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
  return <main>{children}</main>;
}
