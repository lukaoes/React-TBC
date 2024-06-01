import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request: Request) {
  try {
    const { sub } = await request.json();
    const users = await sql`SELECT * FROM user_address WHERE sub = ${sub}`;
    const response = users.rows;
    console.log(users);
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    console.error("Error fetching user addresses:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
