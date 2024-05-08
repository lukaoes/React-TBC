import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userName = searchParams.get("name");
  const email = searchParams.get("email");
  const age = searchParams.get("age");

  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");

  try {
    if (!userName || !email) {
      throw new Error("name, email and age are required");
    }
    await sql`UPDATE Users SET Name = ${userName}, Email = ${email}, Age = ${Number(
      age
    )} WHERE Id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}