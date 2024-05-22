import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, surname, email, password } = await request.json();

    if (!name || !surname || !email || !password) {
      throw new Error("Name, surname, email, and password are required");
    }

    await sql`
      INSERT INTO UsersAuth (name, surname, email, password)
      VALUES (${name}, ${surname}, ${email}, ${password});
    `;

    const users = await sql`SELECT * FROM UsersAuth;`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
