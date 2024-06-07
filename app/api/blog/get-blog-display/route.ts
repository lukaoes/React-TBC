import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const users = await sql`SELECT 
          id,
          user_id,
          category,
          main_photo,
          title,
          created_at
      FROM 
          user_blogs
      ORDER BY 
          id DESC;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
