import CartCard from "../../../../components/Cart/cartCard";

const Cart = () => {
  return (
    <div className="container cart-layout">
      <h1>შენს კალათაში 2 ნივთია</h1>
      <div>
        <div>
          <CartCard />
          <CartCard />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
