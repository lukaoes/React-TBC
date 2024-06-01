import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      sub,
      first_name,
      last_name,
      country,
      city,
      street_address,
      postal_code,
      phone,
      email,
    } = await request.json();

    if (
      !sub ||
      !first_name ||
      !last_name ||
      !country ||
      !city ||
      !street_address ||
      !postal_code ||
      !phone ||
      !email
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Update the address in the database
    await sql`
      UPDATE user_address
      SET
        first_name = ${first_name},
        last_name = ${last_name},
        country = ${country},
        city = ${city},
        street_address = ${street_address},
        postal_code = ${postal_code},
        phone = ${phone},
        email = ${email}
      WHERE sub = ${sub};
    `;

    // Fetch the updated user address
    const updatedUser =
      await sql`SELECT * FROM user_address WHERE sub = ${sub};`;

    return NextResponse.json(
      { updatedUser: updatedUser.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating user address:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
