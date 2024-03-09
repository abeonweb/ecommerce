"use client";
import Image from "next/image";
import { useCart } from "@/lib/context/cart/cart-context";
import { createCartItem, addCartItem } from "@/lib/context/cart/utils";

export default function AddToCartBtn({ product }) {
  const {cartItems, setCartItems} = useCart();
  // create a cartItem payload and add it to cart
  const addItem = () => {
    const item = createCartItem(product);

    setCartItems((prevCart) => addCartItem(prevCart, item));
  };
  return (
    <div className="self-end">
      <button
        title="add to cart"
        className="rounded-full hover:shadow-md hover:scale-[1.05] px-[8px] sm:px-3 py-[9px] sm:py-[13px] bg-offwhite-951 sm:bg-primarypurple-951"
        onClick={addItem}
      >
        <Image width={20} height={18} src={"/shopping_cart.svg"} alt="" className="w-[13.33px] h-3 sm:w-5 sm:h-[18px]"/>
      </button>
    </div>
  );
}
