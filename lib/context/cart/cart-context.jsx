"use client";
import { createContext, useContext, useState } from "react";
import { cartData } from "@/data";

export const CartContext = createContext(null);

const coupons = [{ id: "JenkateMW", value: -25, label: "25.00", applied: false }];
const currencies = { gbp: "£", usd: "$" };
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(cartData);
  const [couponList, setCouponList] = useState(coupons);

  const cartTotal = cartItems.length;
  // total of the cart
  const total = cartItems
    .map(({ quantity, price }) => quantity * price)
    .reduce((acc, c) => acc + c, 0);

  const currency = currencies.gbp;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartTotal,
        total,
        currency,
        couponList,
        setCouponList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}
