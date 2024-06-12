import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user_id, campsite_id, review, main_photo, recommended } =
      await request.json();

    await sql`
    INSERT INTO user_campsite_reviews (
      user_id, campsite_id, review, main_photo, recommended
    ) VALUES (
      ${user_id}, ${campsite_id}, ${review}, ${
      main_photo || ""
    }, ${recommended})
    `;

    const reviews = await sql`SELECT * FROM user_campsite_reviews;`;

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
