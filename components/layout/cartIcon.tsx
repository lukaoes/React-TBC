import Link from "next/link";
import CartCount from "./cartCount";
import Cart from "../../public/assets/images/cart.svg";
import Image from "next/image";

const CartIcon = () => {
  return (
    <Link href="/cart" className="cart-icon">
      <Image src={Cart} alt="cart" width={20} height={20} />
      <CartCount />
    </Link>
  );
};

export default CartIcon;
