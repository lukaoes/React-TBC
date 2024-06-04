import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace(
    "/api/products/get-single-product/",
    ""
  );

  try {
    if (!id) throw new Error("ID is required");
    const product = await sql`SELECT * FROM user_products WHERE id = ${Number(
      id
    )}`;
    return NextResponse.json({ product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
