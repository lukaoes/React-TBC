import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`CREATE TABLE user_blogs (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255),
    category VARCHAR(255),
    main_photo VARCHAR(999),
    blog_post TEXT,
    title VARCHAR(255),
    description VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
