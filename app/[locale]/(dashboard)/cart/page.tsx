import { setStaticParamsLocale } from "next-international/server";
import CartCard from "../../../../components/Cart/cartCard";
import { getStaticParams } from "../../../../locales/server";
import { getUserCart } from "../../../../api";

export function generateStaticParams() {
  return getStaticParams();
}

const Cart = async ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  const cart = await getUserCart(2);

  const products = Object.entries<string>(cart.products);
  console.log(products);
  return (
    <div className="container cart-layout">
      <h1>ნივთები თქვენს კალათაში:</h1>
      <div className="">
        <div>
          {products.map(([id, count]) => (
            <div key={`prod-cart-count-${id}`}>
              <span>{id}</span>
              <span>{count}</span>
            </div>
          ))}
        </div>
        <div>
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
