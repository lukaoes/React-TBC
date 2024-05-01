import { Roboto } from "next/font/google";
import "../../../styles/index.scss"
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";
import { AUTH_COOKIE_KEY } from "../../../constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import { ReactElement } from 'react'
import { I18nProviderClient } from "../../../locales/client";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900",]
 });

export const metadata = {
  title: "LUKMART",
  description: "BUY PRODUCTS FOR A FAIR PRICE",
};

export async function generateStaticParams() {
  return [{ lang: "en"}, {lang: "ge"}]
}


export default async function RootLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
 
  if(!cookie) {
    redirect('/login')
  }
  
  

  return (
    <html>
      <body>
        <I18nProviderClient locale={locale}>
          <div className={`app ${roboto.className}`}>
            <Header />
            <main className='content'>
              {children}
            </main>
            <Footer />
          </div>
        </I18nProviderClient>
      </body>
    </html>
  );
}
