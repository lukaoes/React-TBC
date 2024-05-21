import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      price,
      discount,
      stock,
      brand,
      category,
      thumbnail,
    } = await request.json();

    if (
      !title ||
      !description ||
      !price ||
      discount === undefined ||
      stock === undefined ||
      !category ||
      !thumbnail
    ) {
      throw new Error(
        "Title, description, price, discount, stock, category, and thumbnail are required"
      );
    }

    await sql`
      INSERT INTO products (title, description, price, discount, stock, brand, category, thumbnail)
      VALUES (${title}, ${description}, ${price}, ${discount}, ${stock}, ${brand}, ${category}, ${thumbnail});
    `;

    const products = await sql`SELECT * FROM products;`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
