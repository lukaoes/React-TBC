import { getSingleProduct } from "../../../../../actions";
import { getCurrentLocale } from "../../../../../locales/server";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const locale = getCurrentLocale();
  const { id } = params;
  const product = await getSingleProduct(id);

  if (!product || product.length === 0 || !product[0]) {
    return {
      title: "პროდუქტზე ინფორმაცია ვერ მოიძებნა",
      description: "მოთხოვნილი პროდუქტი წაშლილია ან არ არსებობს.",
    };
  }

  const { title_ge, description_ge, title_en, description_en, main_photo } =
    product[0];

  const ogImageUrl = main_photo ? main_photo : null;

  const title = (() => {
    if (locale === "ge" && title_ge) {
      return title_ge + " | ეზოეზო";
    } else if (title_en) {
      return title_en + " | EzoEzo";
    } else {
      return "";
    }
  })();

  const description = (() => {
    if (locale === "ge" && description_ge) {
      return description_ge;
    } else if (description_en) {
      return description_en;
    } else {
      return "";
    }
  })();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: ogImageUrl ? [{ url: ogImageUrl }] : [],
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
