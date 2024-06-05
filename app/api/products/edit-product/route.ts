import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      backpack_capacity,
      clothing_size,
      condition,
      description_en,
      description_ge,
      first_name,
      id,
      location,
      main_photo,
      negotiable,
      phone,
      photo_urls,
      price,
      quantity,
      shoe_size,
      tent_capacity,
      title_en,
      title_ge,
      type,
    } = await request.json();

    if (!first_name || !id || !phone) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    await sql`
      UPDATE user_products
      SET
        backpack_capacity = ${backpack_capacity || null},
        clothing_size = ${clothing_size || null},
        condition = ${condition || null},
        description_en = ${description_en || null},
        description_ge = ${description_ge || null},
        first_name = ${first_name},
        location = ${location},
        main_photo = ${
          main_photo ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        },
        negotiable = ${negotiable},
        phone = ${phone},
        photo_urls = ${
          photo_urls ||
          "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        },
        price = ${price || null},
        quantity = ${quantity},
        shoe_size = ${shoe_size || null},
        tent_capacity = ${tent_capacity || null},
        title_en = ${title_en || null},
        title_ge = ${title_ge || null},
        type = ${type || null}
      WHERE id = ${id};
    `;

    // Fetch the updated user address
    const updatedProduct =
      await sql`SELECT * FROM user_products WHERE id = ${id};`;

    return NextResponse.json({ updatedProduct }, { status: 200 });
  } catch (error) {
    console.error("Error updating user address:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
