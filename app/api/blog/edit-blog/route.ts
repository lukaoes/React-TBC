import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      category,
      main_photo,
      blog_post,
      title,
      description,
      id,
      created_at,
      user_id,
    } = await request.json();

    if (!blog_post || !category || !description) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE user_blogs
      SET
        category = ${category},
        main_photo = ${main_photo},
        blog_post = ${blog_post},
        title = ${title},
        description = ${description},
        created_at = ${created_at},
        user_id = ${user_id}
      WHERE id = ${id};
    `;

    const updatedBlog = await sql`SELECT * FROM user_blogs WHERE id = ${id};`;

    return NextResponse.json({ updatedBlog }, { status: 200 });
  } catch (error) {
    console.error("Error updating user blog:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
