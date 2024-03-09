import CartItem from "./CartItem";

export default function CartItemsList({cartItems, currency}) {

  return (
    <div
      className={`max-w-[643px] w-full mx-auto xl:mx-0 ${
        cartItems.length < 1 ? "mb-20 md:mb-56" : ""
      }`}
    >
      <div className="flex justify-between leading-[26px] text-base pb-10 border-b border-lightgray-950">
        <span className="">Product</span>
        <span className="sm:pl-28 xl:pl-28">Quantity</span>
        <span className="">Subtotal</span>
      </div>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} currency={currency}/>
        ))}
      </div>
    </div>
  );
}
