import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { sid, email, picture } = await request.json();

    if (!sid) {
      throw new Error("sid, email, picture are required");
    }

    const existingUser = await sql`SELECT * FROM user_info WHERE sid = ${sid};`;

    if (existingUser && existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "sid already exists" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO user_info (sid, email, picture)
      VALUES (${sid}, ${email}, ${picture});
    `;

    const singleUser =
      await sql`SELECT picture FROM user_info WHERE sid = ${sid};`;

    return NextResponse.json({ singleUser }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
