import { getSingleBlog } from "../../../../../actions";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const blogData = await getSingleBlog(id);

  if (!blogData) {
    return {
      title: "ბლოგი ვერ მოიძებნა",
      description: "მოთხოვნილი ბლოგი არ არსებობს.",
    };
  }

  const { title, description, main_photo } = blogData[0];

  const ogImageUrl = main_photo ? main_photo : null;

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
