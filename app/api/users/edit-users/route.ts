import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id, nickname, picture } = await request.json();

    if (!nickname || !picture) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE user_info
      SET
        nickname = ${nickname || null},
        picture = ${picture || null}
      WHERE id = ${id};
    `;

    const updatedUser = await sql`SELECT * FROM user_info WHERE id = ${id};`;

    return NextResponse.json({ updatedUser }, { status: 200 });
  } catch (error) {
    console.error("Error updating user address:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
