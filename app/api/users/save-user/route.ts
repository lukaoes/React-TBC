import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { sub, email, picture } = await request.json();

    if (!sub) {
      throw new Error("sub, email, picture are required");
    }

    const existingUser = await sql`SELECT * FROM user_info WHERE sub = ${sub};`;

    if (existingUser && existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "sub already exists" },
        { status: 400 }
      );
    } else {
      await sql`
      INSERT INTO user_info (sub, email, picture)
      VALUES (${sub}, ${email}, ${picture});
    `;
    }

    const singleUser =
      await sql`SELECT picture FROM user_info WHERE sub = ${sub};`;

    return NextResponse.json({ singleUser }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
