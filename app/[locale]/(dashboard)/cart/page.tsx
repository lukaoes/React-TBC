import { setStaticParamsLocale } from "next-international/server";
import CartCard from "../../../../components/Cart/cartCard";
import { getStaticParams } from "../../../../locales/server";

export function generateStaticParams() {
  return getStaticParams();
}

const Cart = ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  return (
    <div className="container cart-layout">
      <h1>ნივთები თქვენს კალათაში:</h1>
      <div className="">
        <div>
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
