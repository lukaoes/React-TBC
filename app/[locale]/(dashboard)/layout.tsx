import { Roboto } from "next/font/google";
import { Noto_Sans_Georgian } from "next/font/google";
import "../../../styles/index.scss";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { ReactElement } from "react";
import { I18nProviderClient } from "../../../locales/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import HeaderLayout from "../../../components/layout/headerLayout";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const sans = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "LUKMART",
  description: "BUY PRODUCTS FOR A FAIR PRICE",
};

export default async function RootLayout({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: ReactElement;
}) {
  return (
    <html>
      <UserProvider>
        {" "}
        <I18nProviderClient locale={locale}>
          <body>
            <div
              className={`app ${
                locale === "en" ? roboto.className : sans.className
              }`}
            >
              <HeaderLayout />
              <main className="content">{children}</main>
              <Footer />
            </div>
          </body>
        </I18nProviderClient>
      </UserProvider>
    </html>
  );
}
