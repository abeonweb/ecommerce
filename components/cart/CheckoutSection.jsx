import React from "react";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

export default function Checkout({ setActive, setSteps }) {
  return (
    <section className="max-w-[1120px] mx-auto xl:ml-36 flex flex-col lg:flex-row justify-between">
      <CheckoutForm setActive={setActive} setSteps={setSteps}/>
      <OrderSummary  />
    </section>
  );
}
