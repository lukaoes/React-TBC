import { ProductsDisplay } from "../types";

export const sortByPrice = (
  products: ProductsDisplay[],
  order: "high-low" | "low-high"
): ProductsDisplay[] => {
  return products.slice().sort((a, b) => {
    if (order === "high-low") {
      return parseFloat(b.price) - parseFloat(a.price);
    } else {
      return parseFloat(a.price) - parseFloat(b.price);
    }
  });
};

export const sortByDate = (
  products: ProductsDisplay[],
  order: "new-old" | "old-new"
): ProductsDisplay[] => {
  return products.slice().sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    if (order === "new-old") {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
};
