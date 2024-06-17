import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "გაყიდე ან გააქირავე სალაშქრო, საპიკნიკო, საცოცი და ბუნებასთან კავშირში მყოფი პროდუქტები.";
  const descEn =
    "Sell or rent out hiking, camping, climbing and everything that is connected with nature.";
  const pageTitle = locale === "ge" ? "პროდუქტის დამატება" : "Add Product";
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
