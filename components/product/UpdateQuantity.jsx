"use client";
import { useCallback } from "react";
import Image from "next/image";

const MAX_PRODUCT_QUANTITY = 100;
const MIN_PRODUCT_QUANTITY = 1;
export default function UpdateQuantity({ quantity, setQuantity }) {
  const handleChange = useCallback(
    (input) => {
      let value = Number(input);

      if (isNaN(value)) {
        value = quantity;
      } else if (value > MAX_PRODUCT_QUANTITY) {
        value = MAX_PRODUCT_QUANTITY;
      } else if (value < MIN_PRODUCT_QUANTITY) {
        value = MIN_PRODUCT_QUANTITY;
      }
      setQuantity(value);
    },
    [quantity, setQuantity]
  );

  const increase = useCallback(() => {
    handleChange(quantity + 1);
  }, [handleChange, quantity]);

  const decrease = useCallback(() => {
    handleChange(quantity - 1);
  }, [handleChange, quantity]);

  return (
    <div className="flex justify-around py-[10px] px-4 border border-offwhite-950 rounded cursor-pointer">
      <button
        type="button"
        onClick={decrease}
        className=""
        aria-label="decrease quantity"
      >
        <Image width={20} height={20} src={"/minus.svg"} alt="" />
      </button>
      <input
        id="quantity"
        name="quantity"
        type="number"
        min={MIN_PRODUCT_QUANTITY}
        max={MAX_PRODUCT_QUANTITY}
        value={Number(quantity).toString()}
        onChange={(e) => handleChange(e.target.value)}
        className="font-lato text-center font-bold text-primaryblack-950 outline-none"
      />
      <button type="button" onClick={increase} aria-label="increase quantity">
        <Image width={20} height={20} src={"/plus.svg"} alt="" />
      </button>
    </div>
  );
}
