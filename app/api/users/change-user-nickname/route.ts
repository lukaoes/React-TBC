import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function PUT(request: Request) {
  try {
    const { sub, nickname } = await request.json();
    const existingNickname =
      await sql`SELECT * FROM user_info WHERE nickname = ${nickname}`;
    if (existingNickname.rows.length > 0) {
      return NextResponse.json(
        { error: "Nickname already exists" },
        { status: 400 }
      );
    }
    const users =
      await sql`UPDATE user_info SET nickname = ${nickname} WHERE sub = ${sub}`;
    const response = users.rows;
    return NextResponse.json({ response }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
