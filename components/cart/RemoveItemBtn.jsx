import { removeItemFromCart } from "@/lib/context/cart/utils";
import React from "react";

const RemoveItemBtn = ({setCartItems, id}) => {
  return (
    <button
      className="text-primaryred-950 text-xs sm:text-sm leading-[22px} font-medium"
      onClick={() =>
        setCartItems((prevCart) => removeItemFromCart(prevCart, id))
      }
    >
      Remove
    </button>
  );
};

export default RemoveItemBtn;
