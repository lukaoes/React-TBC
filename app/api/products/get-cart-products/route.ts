import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const users = await sql`SELECT id, type, 	
    shoe_size,
    clothing_size,
    backpack_capacity,
    tent_capacity,
    main_photo, title_ge, price, quantity, condition
    negotiable,
    title_en FROM user_products`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
