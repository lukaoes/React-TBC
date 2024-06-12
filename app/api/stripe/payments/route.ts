import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

export const GET = async (request: any) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  try {
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const charges = await stripe.charges.list({
      limit: 100, // Adjust the limit as needed
    });

    const filteredCharges = charges.data.filter(
      (charge: { billing_details: { email: string } }) =>
        charge.billing_details.email === email
    );

    if (filteredCharges.length === 0) {
      return NextResponse.json(
        { error: "No charges found for this email" },
        { status: 404 }
      );
    }

    return NextResponse.json({ payments: filteredCharges });
  } catch (error) {
    console.error("Error fetching payments", error);
    return NextResponse.json(
      { error: "Error fetching payments" },
      { status: 500 }
    );
  }
};
