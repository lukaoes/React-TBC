import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/campsites/get-campsite-reviews/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");
    const reviews =
      await sql`SELECT * FROM user_campsite_reviews WHERE campsite_id = ${Number(
        id
      )}`;
    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
