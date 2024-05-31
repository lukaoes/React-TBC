import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

type Products = {
  [key: string]: number;
};

export async function DELETE(req: NextRequest) {
  try {
    const { userId, productId } = await req.json();

    const result = await sql`
      SELECT products FROM carts
      WHERE user_id = ${userId}
    `;

    let products: Products = {};

    if (result.rowCount > 0) {
      products = result.rows[0].products || {};
    }

    if (typeof products === "string") {
      products = JSON.parse(products);
    }

    delete products[productId];

    const updatedCart = await sql`
      UPDATE carts 
      SET products = ${JSON.stringify(products)}::jsonb
      WHERE user_id = ${userId}
      RETURNING *
    `;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
