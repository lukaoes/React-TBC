import { getSingleCampsite } from "../../../../../actions";
import { getCurrentLocale } from "../../../../../locales/server";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const locale = getCurrentLocale();
  const { id } = params;
  const product = await getSingleCampsite(id);

  if (!product) {
    return {
      title: "საპიკნიკე ადგილზე ინფორმაცია ვერ მოიძებნა",
      description: "მოთხოვნილი საპიკნიკე ადგილი წაშლილია ან არ არსებობს.",
    };
  }

  const { name, description, descriptionen, main_photo } = product[0];

  const ogImageUrl = main_photo ? main_photo : null;

  const title = name + " | ეზოეზო";

  const descriptionCamp = (() => {
    if (locale === "ge" && description) {
      return description;
    } else if (descriptionen) {
      return descriptionen;
    } else {
      return "";
    }
  })();

  return {
    title,
    description: descriptionCamp,
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
