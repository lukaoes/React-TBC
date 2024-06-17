import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "იყიდეთ, გაყიდეთ, იქირავეთ და გააქირავეთ სალაშქრო, საპიკნიკე, საცოცი და ბუნებასთან კავშირში მყოფი ნივთები.";
  const descEn =
    "Buy, sell, rent and rent out hiking, camping, climbing and other products that are in connection with nature.";
  const pageTitle = locale === "ge" ? "პროდუქტები" : "Products";
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
  return <main>{children}</main>;
}
