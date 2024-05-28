import { setStaticParamsLocale } from "next-international/server";
import { getProducts, getUserCart } from "../../../../api";
import CartProducts from "../../../../components/Cart/cartProducts";

const Cart = async ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  const cart = await getUserCart(2);

  const products = Object.entries<string>(cart.products);
  const newProduct = await getProducts();
  const productIdsInCart = products.map((product) => product[0]);
  const filteredProducts = newProduct.filter((product: any) =>
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
        {/* <div></div> */}
        {/* <div><CartCard /></div> */}
      </div>
    </div>
  );
};

export default Cart;
