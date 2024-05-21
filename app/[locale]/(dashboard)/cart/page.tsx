import { setStaticParamsLocale } from "next-international/server";
import CartCard from "../../../../components/Cart/cartCard";
import { getStaticParams } from "../../../../locales/server";
import { getProducts, getUserCart } from "../../../../api";
import CartProducts from "../../../../components/Cart/cartProducts";
import { revalidatePath } from "next/cache";

export function generateStaticParams() {
  return getStaticParams();
}

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

  const handleQuantityChange = async (
    productId: string,
    quantityChange: number
  ) => {
    "use server";
    try {
      const response = await fetch("http://localhost:3000/api/cart/add-cart", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 2,
          productId,
          quantity: quantityChange,
        }),
      });

      if (response.ok) {
        const inputElement = document.getElementById(
          `qty-${productId}`
        ) as HTMLInputElement;
        if (inputElement) {
          const currentValue = parseInt(inputElement.value);
          inputElement.value = (currentValue + quantityChange).toString();
        }
      } else {
        console.error("Error updating quantity:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleProductRemove = async (productId: string) => {
    "use server";
    try {
      const response = await fetch(
        "http://localhost:3000/api/cart/single-remove",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: 2, // Assuming you have a user ID
            productId,
          }),
        }
      );

      if (!response.ok) {
        console.error("Error removing product:", response.statusText);
        revalidatePath("/cart");
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="container cart-layout">
      <h1>ნივთები თქვენს კალათაში:</h1>
      <div className="">
        <CartProducts
          filteredProducts={filteredProducts}
          handleQuantityChange={handleQuantityChange}
          initialQuantities={initialQuantities}
          handleProductRemove={handleProductRemove}
        />
        <div></div>
        <div>
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
