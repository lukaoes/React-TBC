import { Roboto } from "next/font/google";
import { Noto_Sans_Georgian } from "next/font/google";
import "../../../styles/index.scss";
import Footer from "../../../components/layout/Footer";
import { ReactElement } from "react";
import { I18nProviderClient } from "../../../locales/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import HeaderLayout from "../../../components/layout/headerLayout";
import { ViewTransitions } from "next-view-transitions";
import { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const title = "ეზოეზო";
  const titleEn = "EzoEzo";
  const desc =
    "ეზოეზო არის პლატფორმა, სადაც შეგიძლიათ იყიდოთ, გაყიდოთ, იქირაოთ და გააქირაოთ სალაშქრო პროდუქცია, ასევე იქირაოთ და გააქირაოთ საპიკნიკე ადგილები.";
  const descEn =
    "EzoEzo is space, where you can buy, sell, rent and rent out hiking products, also rent and rent out campsites.";
  const pageTitle = locale === "ge" ? "მთავარი" : "Home";
  const siteTitle = locale === "ge" ? title : titleEn;
  const description = locale === "ge" ? desc : descEn;

  return {
    title: `${pageTitle} | ${siteTitle}`,
    description: description,
    keywords: ["ლაშქრობა", "პიკნიკი", "ყიდვა-გაყიდვა", "ბუნება", "კემპინგი"],
    metadataBase: new URL("https://ezoezo.vercel.app/"),
    openGraph: {
      images: "./opengraph-image.png",
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const sans = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default async function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <ViewTransitions>
      <html lang="en">
        <UserProvider>
          <body>
            <I18nProviderClient locale={locale}>
              <div
                className={`app ${
                  locale === "en" ? roboto.className : sans.className
                }`}
              >
                <HeaderLayout />
                <main className="content">{children}</main>
                <Footer />
              </div>
            </I18nProviderClient>
          </body>
        </UserProvider>
      </html>
    </ViewTransitions>
  );
}
