import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const reviews =
      await sql`DELETE FROM user_campsite_reviews WHERE id = ${id}`;
    const response = reviews.rows;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
