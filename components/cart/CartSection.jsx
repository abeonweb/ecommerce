"use client";
import React from "react";
import CartItemsList from "@/components/cart/CartItemsList";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/lib/context/cart/cart-context";

export default function CartSection({setActive, setSteps}) {
  const {cartItems, cartTotal, total, currency} = useCart();

  
  return (
    <section className="max-w-[1200px] mx-auto mb-32 px-2 md:px-0 flex flex-col gap-y-20 xl:flex-row xl:justify-between">
      <CartItemsList cartItems={cartItems} currency={currency} />
      <CartSummary
        cartTotal={cartTotal}
        total={total}
        currency={currency}
        setActive={setActive}
        setSteps={setSteps}
      />
    </section>
  );
}
