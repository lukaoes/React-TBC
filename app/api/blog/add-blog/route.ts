import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user_id, category, main_photo, blog_post, title, description } =
      await request.json();

    await sql`
    INSERT INTO user_blogs (
      user_id, category, main_photo, blog_post, title,
      description
    ) VALUES (
      ${user_id}, ${category}, ${main_photo}, ${blog_post}, ${title},
      ${description})
    `;

    const products = await sql`SELECT * FROM user_blogs;`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
