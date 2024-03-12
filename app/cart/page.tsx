"use client";
import { useState } from "react";
import Link from "next/link";
import CartSteps from "@/components/cart/CartSteps";
import CartSection from "@/components/cart/CartSection";
import CheckoutSection from "@/components/cart/CheckoutSection";
import OrderComplete from "@/components/cart/OrderComplete";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import {STEPS} from "@/data";

export default function CartPage() {
  const [steps, setSteps] = useState(STEPS);
  const [active, setActive] = useState(STEPS[0].title);
  return (
    <>
      <Link href={"/"} className="flex gap-x-0.5 pl-2 md:pl-10 xl:pl-[120px] pt-10">
        <ChevronLeftIcon className="h-4 w-4 md:h-6 md:w-6 text-gray-500" />
        <span className="text-xs md:text-base">Back to catalog</span>
      </Link>
      <CartSteps title={active} steps={steps} />

      {active == "Cart" && <CartSection setActive={setActive} setSteps={setSteps} />}
      {active == "Checkout details" && <CheckoutSection setActive={setActive} setSteps={setSteps}/>}
      {active == "Order complete!" && <OrderComplete />}
    </>
  )
}