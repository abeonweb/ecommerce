"use client";
import { useState } from "react";
import UpdateQuantity from "./UpdateQuantity";
import { createCartItem, addCartItem } from "@/lib/context/cart/utils";
import { useCart } from "@/lib/context/cart/cart-context";

export default function AddToCart({
  sizes,
  colors,
  product,
  selectedSize,
  selectedColor,
  setSizeWarning,
  setColorWarning,
  resetColorAndSize,
}) {
  const [quantity, setQuantity] = useState(1);
  const [info, setInfo] = useState("Add to cart");
  const { setCartItems } = useCart();


  const Clearinfo = () => {
    setTimeout(()=>{
      setInfo("Add to cart");
    }, 1500)
  };

  const handleAddToCart = () => {
    if (
      (colors != undefined && selectedColor == "") ||
      (sizes != undefined && selectedSize == "")
    ) {
      if (sizes && sizes.length > 0 && selectedSize == "") {
        // send a warning for size or update a value
        setSizeWarning("Please select a size");
      } else setSizeWarning("");
      if (colors && colors.length > 0 && selectedColor == "") {
        // send a warning for color or update a value
        setColorWarning("Please select a color");
      } else setColorWarning("");
    } else {
      const productToAdd = {
        ...product,
        size: selectedSize,
        color: selectedColor,
      };
      const newCartItem = createCartItem(productToAdd);
      newCartItem.quantity = quantity;
      setCartItems((prevCartItems) => addCartItem(prevCartItems, newCartItem));
      setInfo("Item added to cart");
      resetColorAndSize();
      Clearinfo()
    }
  };
  let paddingTop;
  if (colors !== undefined || sizes !== undefined) {
    paddingTop = "pt-[14px]";
  } else if (colors === undefined && sizes === undefined) {
    paddingTop = "pt-[28px]";
  }
  return (
    <div className={`max-w-[445px] font-inter text-sm mb-5 pt-[34px] `}>
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
        className={`w-full py-[14px] px-[22px] bg-primarypurple-950 rounded-[10px] font-semibold text-offwhite-950 cursor-pointer hover:shadow-lg`}
        onClick={handleAddToCart}
      >
        {info}
      </button>
    </div>
  );
}
