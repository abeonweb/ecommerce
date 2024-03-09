"use client";
import { useState } from "react";
import UpdateQuantity from "./UpdateQuantity";
import { createCartItem, addCartItem } from "@/lib/context/cart/utils";
import { useCart } from "@/lib/context/cart/cart-context";

export default function AddToCart({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {setCartItems} = useCart();

  const handleAddToCart = () => {
    const newCartItem = createCartItem(product);
    newCartItem.quantity = quantity;
    setCartItems((prevCartItems) => addCartItem(prevCartItems, newCartItem));
  };

  return (
    <div className="max-w-[445px] font-inter border-t border-offwhite-950 pt-[28px] text-sm mb-5">
      <div className="flex justify-between items-center gap-x-3 max-w-[178px] mb-[34px]">
        <label
          htmlFor="quantity"
          className="text-base leading-5 text-primaryblack-950"
        >
          Quantity
        </label>
        <UpdateQuantity quantity={quantity} setQuantity={setQuantity} />
      </div>

      <button
        type="button"
        className="w-full py-[14px] px-[22px] bg-primarypurple-950 rounded-[10px] font-semibold text-offwhite-950 cursor-pointer hover:shadow-lg"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
