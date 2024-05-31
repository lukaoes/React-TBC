import { setStaticParamsLocale } from "next-international/server";
import { getProducts, getUserCart } from "../../../../api";
import CartProducts from "../../../../components/Cart/cartProducts";
import { getSession } from "@auth0/nextjs-auth0";

const Cart = async ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  try {
    const session = await getSession();

    if (!session || !session.user || !session.user.sub) {
      return <div>Please log in.</div>;
    }

    const userId = session.user.sub;

    const cart = await getUserCart(userId);

    if (!cart || !cart.products) {
      return <div>No items in your cart.</div>;
    }

    const products = Object.entries<string>(cart.products);
    const allProducts = await getProducts();
    const productIdsInCart = products.map((product) => product[0]);
    const filteredProducts = allProducts.filter((product: any) =>
      productIdsInCart.includes(product.id.toString())
    );
    const initialQuantities: Record<string, number> = products.reduce(
      (acc, [id, count]) => {
        acc[id] = parseInt(count);
        return acc;
      },
      {} as Record<string, number>
    );

    return (
      <div className="container cart-layout">
        <h1>ნივთები თქვენს კალათაში:</h1>
        <div>
          <CartProducts
            filteredProducts={filteredProducts}
            initialQuantities={initialQuantities}
          />
        </div>
      </div>
    );
  } catch (error) {
    return <div>An error occurred. Please try again later.</div>;
  }
};

export default Cart;
