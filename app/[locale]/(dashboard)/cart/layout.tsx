import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc = "თქვენი კალათა. დაამატეთ, წაშალეთ და იყიდეთ სასურველი ნივთები!";
  const descEn = "Your cart. Add, remove and buy products you wish!";
  const pageTitle = locale === "ge" ? "კალათა" : "Cart";
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
