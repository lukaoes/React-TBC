import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const users = await sql`
      SELECT 
        id,
        type,
        category,
        subcategory,
        shoe_size,
        clothing_size,
        backpack_capacity,
        tent_capacity,
        main_photo,
        title_ge,
        description_ge,
        title_en,
        description_en,
        price,
        negotiable,
        location,
        created_at,
        condition
      FROM 
        user_products
      ORDER BY 
        created_at DESC;
    `;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
