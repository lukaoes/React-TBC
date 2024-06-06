import { setStaticParamsLocale } from "next-international/server";
import { getCartProducts, getUserCart } from "../../../../api";
import CartProducts from "../../../../components/Cart/cartProducts";
import { getSession } from "@auth0/nextjs-auth0";
import LoginToAccess from "../../../../components/noAccess/loginToAccess";
import SecondHeader from "../../../../components/layout/secondHeader";
import cartImage from "../../../../public/assets/images/secondHeader/cart.jpg";
const Cart = async ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  try {
    const session = await getSession();

    if (!session || !session.user || !session.user.sub) {
      return <LoginToAccess />;
    }

    const userId = session.user.sub;

    const cart = await getUserCart(userId);

    if (!cart || !cart.products) {
      return <div>თქვენი კალათა ცარიელია.</div>;
    }

    const products = Object.entries<string>(cart.products);
    const allProducts = await getCartProducts();
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
      <>
        <SecondHeader title="კალათა" backgroundImage={cartImage} />
        <div className="cart-layout">
          <h1>ნივთები თქვენს კალათაში:</h1>
          <div>
            <CartProducts
              filteredProducts={filteredProducts}
              initialQuantities={initialQuantities}
            />
          </div>
        </div>
      </>
    );
  } catch (error) {
    return <div>შეცდომაა, მოგვიანებით სცადეთ.</div>;
  }
};

export default Cart;
