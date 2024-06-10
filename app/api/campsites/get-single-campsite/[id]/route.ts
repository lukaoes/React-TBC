import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/campsites/get-single-campsite/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");
    const campsite = await sql`SELECT * FROM user_campsites WHERE id = ${Number(
      id
    )}`;
    return NextResponse.json({ campsite }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
