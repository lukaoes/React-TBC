import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "ყველაფერი რაც უნდა იცოდე თუ ბუნებას ხშირად სტუმრობ. ბლოგები ბუნებაზე ქართულად. წაიკითხე და დაამატე ბლოგები ლაშქრობაზე, ქემფინგზე...";
  const descEn =
    "Everything that you need to know if you visit nature often. Blogs about nature in Georgian. Read and add blogs about hiking, camping...";
  const pageTitle = locale === "ge" ? "ბლოგი" : "Blog";
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
  return <main>{children}</main>;
}
