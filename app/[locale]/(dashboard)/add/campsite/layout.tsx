import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "გააქირავე საპიკნიკო ადგილი, ეზო, ფერმა, ვენახი... მიიღე დამატებითი შემოსავალი და უმასპინძლე სტუმრებს.";
  const descEn =
    "Rent out camping site, yard, farm, grapeyard... Get additional income and be a host to visitors.";
  const pageTitle =
    locale === "ge" ? "საპიკნიკე ადგილის დამატება" : "Add Campsite";
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: [
      "პროდუქტები",
      "სალაშქრო აღჭურვილობა",
      "საცოცი აღჭურვილობა",
      "პიკნიკი",
      "კემპინგი",
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
  return <>{children}</>;
}
