"use client";
import { useAppContext } from "../../context";

const CartCount = () => {
  const { state } = useAppContext();
  return <span>{state ? state : 0}</span>;
};

export default CartCount;
