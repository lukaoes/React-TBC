import Link from "next/link";
// import CartCount from "./cartCount";
import Cart from "../../public/assets/images/cart.svg";
import Image from "next/image";
import { getUserCart } from "../../api";
// import { getUserCart } from "../../api";

const CartIcon = async () => {
  const userId = 2;
  const cart = await getUserCart(userId);
  const productQuantities = cart.products;

  const totalCount = Object.values<number>(productQuantities).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  return (
    <Link href="/cart" className="cart-icon">
      <Image src={Cart} alt="cart" width={20} height={20} />
      {/* <CartCount /> */}
      <span>{totalCount}</span>
    </Link>
  );
};

export default CartIcon;
