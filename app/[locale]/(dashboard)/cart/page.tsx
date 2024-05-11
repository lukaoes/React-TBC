import CartCard from "../../../../components/Cart/cartCard";
import CartTotal from "../../../../components/Cart/cartTotal";

const Cart = () => {
  return (
    <div className="container cart-layout">
      <h1>შენს კალათაში 2 ნივთია</h1>
      <div className="cart-details-layout">
        <div>
          <CartCard />
          <CartCard />
        </div>
        <div>
          <CartTotal />
        </div>
      </div>
    </div>
  );
};

export default Cart;
