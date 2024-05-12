"use client";

import { CardProps } from "../cards/Card";

const FeaturedCardButton = ({
  handleClick,
  product,
}: {
  handleClick: (productId: CardProps) => void;
  product: CardProps;
}) => {
  return <button onClick={() => handleClick(product)}>🛒</button>;
};

export default FeaturedCardButton;
