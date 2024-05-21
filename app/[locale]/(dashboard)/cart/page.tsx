import { setStaticParamsLocale } from "next-international/server";
import CartCard from "../../../../components/Cart/cartCard";
import { getStaticParams } from "../../../../locales/server";
import { getProducts, getUserCart } from "../../../../api";
import Image from "next/image";
import { Product } from "../page";

export function generateStaticParams() {
  return getStaticParams();
}

const Cart = async ({ params: { locale } }: { params: { locale: string } }) => {
  setStaticParamsLocale(locale);

  const cart = await getUserCart(2);

  const products = Object.entries<string>(cart.products);
  console.log(products);
  const newProduct = await getProducts();

  // console.log("newproduct", newProduct);

  const productIdsInCart = products.map((product) => product[0]);
  const filteredProducts = newProduct.filter((product: any) =>
    productIdsInCart.includes(product.id.toString())
  );

  return (
    <div className="container cart-layout">
      <h1>ნივთები თქვენს კალათაში:</h1>
      <div className="">
        <div>
          {filteredProducts.map((item: Product, index: number) => {
            // Find the count for the current product ID
            const count =
              products.find(([id, _]) => id === item.id.toString())?.[1] || 0;

            return (
              <div key={`filteredProducss-${index}`}>
                <h2>{item.title}</h2>
                <p>Price: ${item.price}</p>
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={200}
                  height={400}
                />
                <div className="cart-qty">
                  <button>-</button>
                  <input
                    type="number"
                    name="qty"
                    min="1"
                    max="11"
                    className="cart-qty_0"
                    value={count} // Set the count as the value
                    // onChange={(e) =>
                    //   handleQuantityChange(index, parseInt(e.target.value))
                    // }
                  />
                  <button>+</button>
                </div>
              </div>
            );
          })}
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
