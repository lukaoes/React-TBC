import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      user_id,
      space_type,
      accepted_guests,
      capacity,
      location,
      main_photo,
      photo_urls,
      size,
      name,
      amenities,
      activities,
      description,
      descriptionen,
      first_name,
      phone,
      price,
      negotiable,
    } = await request.json();

    await sql`
    INSERT INTO user_campsites (
      user_id, space_type, accepted_guests, capacity, location, main_photo,
      photo_urls, size, name, amenities, activities, description, descriptionen,
      first_name, phone, price, negotiable
    ) VALUES (
      ${user_id}, ${space_type}, ${accepted_guests}, ${capacity}, ${location}, ${main_photo},
      ${photo_urls}, ${size}, ${name}, ${amenities}, ${activities}, ${description}, ${descriptionen},
      ${first_name}, ${phone}, ${price}, ${negotiable}
    )
    `;

    const campsites = await sql`SELECT * FROM user_campsites;`;

    return NextResponse.json({ campsites }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
