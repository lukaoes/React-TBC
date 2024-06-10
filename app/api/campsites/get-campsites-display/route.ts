import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const campsites = await sql`SELECT 
    id,
    space_type,
    accepted_guests,
    capacity,
    location,
    main_photo,
    size,
    name,
    amenities,
    activities,
    price,
    negotiable
      FROM 
    user_campsites;`;
    return NextResponse.json({ campsites }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
