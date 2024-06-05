import { QueryResultRow, sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function POST(request: Request) {
  try {
    const { category, excludedId } = await request.json();

    if (!category) throw new Error("category is required");

    const categoryProductsResult =
      await sql`SELECT * FROM user_products WHERE category = ${category}`;
    const categoryProducts = categoryProductsResult.rows;

    const filteredCategoryProducts = categoryProducts.filter(
      (product) => product.id !== excludedId
    );

    const excludedProductExists = categoryProducts.some(
      (product) => product.id === excludedId
    );

    const additionalProductsCount =
      excludedProductExists && filteredCategoryProducts.length < 3
        ? 4 - filteredCategoryProducts.length
        : 4 - categoryProducts.length;

    let additionalProducts: QueryResultRow[] = [];

    if (additionalProductsCount > 0) {
      const additionalProductsResult = await sql`
        SELECT *
        FROM user_products
        WHERE category <> ${category} AND id <> ${excludedId}
        ORDER BY RANDOM()
        LIMIT ${additionalProductsCount}
      `;
      additionalProducts = additionalProductsResult.rows;
    }

    const products = [...filteredCategoryProducts, ...additionalProducts];

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
