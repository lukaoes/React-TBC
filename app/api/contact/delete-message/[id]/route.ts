import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/contact/delete-message/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM contact WHERE id = ${Number(id)};`;

    const users = await sql`SELECT * FROM contact;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
