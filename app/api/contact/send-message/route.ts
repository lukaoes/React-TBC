import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, number, message } = await request.json();

  try {
    if (!name || !email || !number || !message)
      throw new Error("Name, email, number and message are required");

    await sql`INSERT INTO contact (name, email, number, message) VALUES (${name}, ${email}, ${number}, ${message});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;

  return NextResponse.json({ users }, { status: 200 });
}
