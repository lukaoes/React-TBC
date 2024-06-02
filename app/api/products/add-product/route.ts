import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      user_id,
      type,
      category,
      subcategory,
      shoe_size,
      clothing_size,
      backpack_capacity,
      tent_capacity,
      main_photo,
      photo_urls,
      title_ge,
      description_ge,
      title_en,
      description_en,
      price,
      negotiable,
      location,
      first_name,
      phone,
      quantity,
      condition,
    } = await request.json();

    await sql`
    INSERT INTO user_products (
      user_id, type, category, subcategory, shoe_size, clothing_size,
      backpack_capacity, tent_capacity, main_photo, photo_urls, title_ge,
      description_ge, title_en, description_en, price, negotiable, location,
      first_name, phone, quantity, condition
    ) VALUES (
      ${user_id}, ${type}, ${category}, ${subcategory || null}, ${
      shoe_size || null
    }, ${clothing_size || null},
      ${backpack_capacity || null}, ${tent_capacity || null}, ${main_photo}, ${
      photo_urls || []
    }, ${title_ge}, ${description_ge},
      ${title_en || null}, ${
      description_en || null
    }, ${price}, ${negotiable}, ${location}, ${first_name}, ${phone}, ${quantity}, ${condition}
    )
    `;

    const products = await sql`SELECT * FROM user_products;`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
