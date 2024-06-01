import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      firstName,
      sub,
      lastName,
      country,
      city,
      streetAddress,
      postalCode,
      phone,
      email,
    } = await request.json();

    if (
      !firstName ||
      !sub ||
      !lastName ||
      !country ||
      !city ||
      !streetAddress ||
      !postalCode ||
      !phone ||
      !email
    ) {
      throw new Error("All fields are required");
    }

    const existingUser =
      await sql`SELECT * FROM user_address WHERE sub = ${sub};`;

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "User with the same sub already exists" },
        { status: 400 }
      );
    }

    await sql`INSERT INTO user_address (
      first_name, sub, last_name, country, city, street_address, postal_code, phone, email
    ) VALUES (
      ${firstName}, ${sub}, ${lastName}, ${country}, ${city}, ${streetAddress}, ${postalCode}, ${phone}, ${email}
    );`;

    const users = await sql`SELECT * FROM user_address;`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error || "An error occurred" },
      { status: 500 }
    );
  }
}
