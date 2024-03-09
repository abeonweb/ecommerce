"use client";
import { useCallback, useState } from "react";
import Image from "next/image";

const MAX_PRODUCT_QUANTITY = 100;
const MIN_PRODUCT_QUANTITY = 1;
export default function UpdateCartQuantity({
  id,
  quantityValue,
  setCartItems,
}) {
  // control user input
  const [quantityInput, setQuantityInput] = useState(quantityValue);

  const updateQuantityInCartItem = useCallback(
    (value) => {
      setCartItems((prevCartItems) => {
        return prevCartItems.map((cartItem) => {
          if (id == cartItem.id) {
            return { ...cartItem, quantity: value };
          }
          return cartItem;
        });
      });
    },
    [id, setCartItems]
  );

  const handleChange = useCallback(
    (input) => {
      let value = Number(input);

      if (isNaN(value)) {
        value = quantityInput;
      } else if (value > MAX_PRODUCT_QUANTITY) {
        value = MAX_PRODUCT_QUANTITY;
      } else if (value < MIN_PRODUCT_QUANTITY) {
        value = MIN_PRODUCT_QUANTITY;
      }
      // update controlled component
      setQuantityInput(value);
      // update quantity in cart item
      updateQuantityInCartItem(value);
    },
    [quantityInput, updateQuantityInCartItem]
  );

  const increase = useCallback(() => {
    handleChange(quantityInput + 1);
  }, [handleChange, quantityInput]);

  const decrease = useCallback(() => {
    handleChange(quantityInput - 1);
  }, [handleChange, quantityInput]);

  return (
    <div className="self-start flex flex-col">
      <div className="flex flex-col">
        <div className="flex justify-around p-[7px] border border-lightgray-953 rounded cursor-pointer">
          <button
            type="button"
            onClick={decrease}
            className=""
            aria-label="decrease quantity"
          >
            <Image width={16} height={16} src={"/minus.svg"} alt="" />
          </button>
          <input
            name="quantity"
            type="number"
            min={MIN_PRODUCT_QUANTITY}
            max={MAX_PRODUCT_QUANTITY}
            value={Number(quantityInput).toString()}
            onChange={(e) => handleChange(e.target.value)}
            className="w-[32px] text-center text-xs font-bold text-primaryblack-950 outline-none"
          />
          <button
            type="button"
            onClick={increase}
            aria-label="increase quantity"
          >
            <Image width={16} height={16} src={"/plus.svg"} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
