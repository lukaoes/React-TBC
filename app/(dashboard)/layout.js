import { Roboto } from "next/font/google";
import "../../styles/index.scss"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900",]
 });

export const metadata = {
  title: "LUKMART",
  description: "BUY PRODUCTS FOR A FAIR PRICE",
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();

  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
 
  if(!cookie) {
    redirect('/login')
  }
  return (
    <html lang="en">
      <body>
        <div className={`app ${roboto.className}`}>
          <Header />
          <main className='content'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
