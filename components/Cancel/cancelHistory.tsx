"use client";

import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { emptyUserCart } from "../../actions";

const CancelHistory = () => {
  const { user } = useUser();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const fromStripe = query.get("from") === "stripe";

    if (fromStripe && typeof user?.sub === "string") {
      const emptyCartWhenSuccess = async () => {
        await emptyUserCart(user.sub as string);
      };
      emptyCartWhenSuccess();
    }
  }, [user]);

  return <div></div>;
};

export default CancelHistory;
