import { NextResponse } from "next/server";
import { BASE_URL } from "../../../../api";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products, email } = await request.json();
  const data: any[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() ===
          product?.title_en?.toLowerCase()
      );

      if (!stripeProduct) {
        const prod = await stripe.products.create({
          name: product.title_en || product.title_ge,
          default_price_data: {
            unit_amount: Number(product.price) * 100,
            currency: "usd",
          },
        });
        console.log(prod, "prod");
      }
    }
  } catch (error) {
    console.error("Error in creating a new product", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (prod: any) =>
        prod?.name?.toLowerCase() === product?.title_en?.toLowerCase()
    );

    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }

  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems,
    mode: "payment",
    customer_email: email,
    success_url: `${BASE_URL}/success?from=stripe`,
    cancel_url: `${BASE_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
};
