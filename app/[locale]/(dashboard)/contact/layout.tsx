import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "ეზოეზოსთან კონტაქტი, სამუშაო დროები, იმეილი, ნომერი. გაგზავნეთ შეტყობინება.";
  const descEn =
    "Contact with EzoEzo, working time, email, number. Send message.";
  const pageTitle = locale === "ge" ? "კონტაქტი" : "Contact";
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
