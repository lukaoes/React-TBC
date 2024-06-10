import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      id,
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
      map,
    } = await request.json();

    if (!first_name || !id || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE user_campsites
      SET
        space_type = ${space_type},
        accepted_guests = ${accepted_guests},
        capacity = ${capacity},
        location = ${location},
        main_photo = ${main_photo},
        photo_urls = ${photo_urls},
        size = ${size},
        name = ${name},
        amenities = ${amenities},
        activities = ${activities},
        description = ${description},
        descriptionen = ${descriptionen},
        first_name = ${first_name},
        phone = ${phone},
        price = ${price},
        negotiable = ${negotiable},
        map = ${map}
      WHERE id = ${id};
    `;

    const updatedCampsite =
      await sql`SELECT * FROM user_campsites WHERE id = ${id};`;

    return NextResponse.json({ updatedCampsite }, { status: 200 });
  } catch (error) {
    console.error("Error updating user address:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
