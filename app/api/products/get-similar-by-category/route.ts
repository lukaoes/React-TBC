import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const { category } = await request.json();

    if (!category) throw new Error("category is required");

    const categoryProductsResult =
      await sql`SELECT * FROM user_products WHERE category = ${category}`;
    const categoryProducts = categoryProductsResult.rows;

    if (categoryProducts.length < 4) {
      const additionalProductsResult = await sql`
        SELECT *
        FROM user_products
        WHERE category <> ${category}
        ORDER BY RANDOM()
        LIMIT ${4 - categoryProducts.length}
      `;
      const additionalProducts = additionalProductsResult.rows;

      const products = [...categoryProducts, ...additionalProducts];

      return NextResponse.json({ products }, { status: 200 });
    } else {
      return NextResponse.json({ categoryProducts }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
