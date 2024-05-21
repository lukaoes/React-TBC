"use client";
import { useEffect, useState } from "react";
// import { useAppContext } from "../../context";
import { getUserCart } from "../../api";

const CartCount = () => {
  const userId = 2;
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const cart = await getUserCart(userId);
        const productQuantities = cart.products;
        const count = Object.values<number>(productQuantities).reduce(
          (acc, quantity) => acc + quantity,
          0
        );
        setTotalCount(count);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();
  }, []);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const cart = await getUserCart(userId);
        const productQuantities = cart.products;
        const count = Object.values<number>(productQuantities).reduce(
          (acc, quantity) => acc + quantity,
          0
        );
        setTotalCount(count);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();
  }, [totalCount]);

  // const { state } = useAppContext();
  return (
    <span>
      {totalCount}
      {/* <span>{state ? state : 0}</span> */}
    </span>
  );
};

export default CartCount;
