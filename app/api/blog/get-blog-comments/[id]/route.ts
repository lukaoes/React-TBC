import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/blog/get-blog-comments/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");
    const comments =
      await sql`SELECT * FROM user_blog_comments WHERE blog_id = ${Number(id)}`;
    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
