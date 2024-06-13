import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request: Request) {
  try {
    const { nickname } = await request.json();

    const userResult = await sql`
      SELECT sub, picture, email
      FROM user_info
      WHERE nickname = ${nickname}
    `;

    const user = userResult.rows[0];
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const { sub } = user;

    const productsResultPromise = sql`
      SELECT id, user_id, type, category, subcategory, main_photo, title_ge, title_en, price, negotiable, location, created_at
      FROM user_products
      WHERE user_id = ${sub}
    `;

    const blogsResultPromise = sql`
      SELECT id, user_id, category, main_photo, title
      FROM user_blogs
      WHERE user_id = ${sub}
    `;

    const campsitesResultPromise = sql`
    SELECT id, accepted_guests, user_id, location, main_photo, price, negotiable, name, space_type, size
    FROM user_campsites
    WHERE user_id = ${sub}
  `;

    const commentsResultPromise = sql`
      SELECT id, user_id, blog_id, comment, main_photo, rating, created_at
      FROM user_blog_comments
      WHERE user_id = ${sub}
    `;

    const reviewsResultPromise = sql`
      SELECT id, user_id, campsite_id, review, main_photo, recommended, created_at
      FROM user_campsite_reviews
      WHERE user_id = ${sub}
    `;

    const [
      productsResult,
      blogsResult,
      campsitesResult,
      commentsResult,
      reviewsResult,
    ] = await Promise.all([
      productsResultPromise,
      blogsResultPromise,
      campsitesResultPromise,
      commentsResultPromise,
      reviewsResultPromise,
    ]);

    const products = productsResult.rows;
    const blogs = blogsResult.rows;
    const campsites = campsitesResult.rows;
    const comments = commentsResult.rows;
    const reviews = reviewsResult.rows;

    const response = {
      user,
      products,
      blogs,
      campsites,
      comments,
      reviews,
    };

    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
