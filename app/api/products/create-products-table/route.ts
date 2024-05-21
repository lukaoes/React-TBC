import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        discount INTEGER NOT NULL,
        stock INTEGER NOT NULL,
        brand VARCHAR(255),
        category VARCHAR(255) NOT NULL,
        thumbnail VARCHAR(1000) NOT NULL
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {
    console.error("Error creating table:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
